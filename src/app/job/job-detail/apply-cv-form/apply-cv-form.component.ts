import {Component, Inject, OnInit} from '@angular/core';
import {FileUpLoadService} from "../../../services/file-up-load.service";
import {environment} from "../../../../environment";
import {CV} from "../../../entity/CV";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CvService} from "../../../services/cv.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-apply-cv-form',
  templateUrl: './apply-cv-form.component.html',
  styleUrls: ['./apply-cv-form.component.css']
})
export class ApplyCVFormComponent implements OnInit {
  private cvPath = environment.cvFirebasePath;
  cv: CV = new CV();
  file: any;
  comments: any;

  private progressSubscription: Subscription | undefined;
  uploadProgress: any;

  constructor(private fileUploadService: FileUpLoadService,
              private cvService: CvService,
              private route: Router,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ApplyCVFormComponent>
  ) {
  }

  ngOnInit(): void {
    this.cv.appUser = {id: this.data.profileId};
    this.cv.job = {id: this.data.jobId};

    this.progressSubscription = this.fileUploadService.currentProgress.subscribe(
      progress => this.uploadProgress = progress
    );
  }

  onCvSelected(event: any) {
    this.file = event.target.files[0];
    console.log(this.file)

  }

  onSubmitCvForm() {
    this.cv.comment = this.comments;
    console.log(this.cv)
    console.log(this.file)
    this.fileUploadService.uploadFile(this.file, this.cvPath).subscribe(downloadURL => {
      console.log(`File available at: ${downloadURL}`);
      this.cv.path = downloadURL;
      this.cvService.applyCv(this.cv).subscribe(data => {
        this.dialogRef.close(true);
      });
    });
  }
}
