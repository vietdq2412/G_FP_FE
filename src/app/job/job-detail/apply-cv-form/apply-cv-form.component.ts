import {Component, Inject, OnInit} from '@angular/core';
import {FileUpLoadService} from "../../../services/file-up-load.service";
import {environment} from "../../../../environment";
import {CV} from "../../../entity/CV";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CvService} from "../../../services/cv.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NotificationService} from "../../../services/notification.service";
import {Notification} from "../../../entity/notification";
import {Company} from "../../../entity/company";

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
  isCv: boolean = true;

  constructor(private fileUploadService: FileUpLoadService,
              private cvService: CvService,
              private notificationService: NotificationService,
              private route: Router,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ApplyCVFormComponent>
  ) {
  }

  ngOnInit(): void {
    this.cv.appUser = {id: this.data.profileId, name: this.data.from};
    this.cv.job = {id: this.data.jobId, name: this.data.name};

    this.progressSubscription = this.fileUploadService.currentProgress.subscribe(
      progress => this.uploadProgress = progress
    );
  }

  onCvSelected(event: any) {
    this.file = event.target.files[0];
    console.log(this.file)

  }

  onSubmitCvForm() {
    if (this.file) {
      this.cv.comment = this.comments;
      this.fileUploadService.uploadFile(this.file, this.cvPath, this.cv.appUser?.name + "-cv").subscribe(downloadURL => {
        console.log(`File available at: ${downloadURL}`);
        this.cv.path = downloadURL;
        this.cvService.applyCv(this.cv).subscribe(data => {
          this.dialogRef.close(true);

          let company = new Company();
          let noti = new Notification();
          noti.title = this.cv.appUser?.name + "applied to your job!"
          noti.comment = "A candidate applied CV to your Job: " + this.cv.job?.name
          noti.jobId = this.cv.job?.id;

          this.notificationService.createNotification(noti).subscribe(data => {
            console.log("createNotification applycv: ", data);
          });
        });
      });
    } else {
      this.isCv = false;
    }
  }
}
