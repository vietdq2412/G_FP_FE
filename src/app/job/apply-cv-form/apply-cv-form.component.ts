import {Component, OnInit} from '@angular/core';
import event from "$GLOBAL$";
import {FileUpLoadService} from "../../services/file-up-load.service";

@Component({
  selector: 'app-apply-cv-form',
  templateUrl: './apply-cv-form.component.html',
  styleUrls: ['./apply-cv-form.component.css']
})
export class ApplyCVFormComponent implements OnInit{

  constructor(private fileUploadService:FileUpLoadService,
              ) {
  }
  ngOnInit(): void {
  }

  onLogoSelected(event: any) {
    const file = event.target.files[0];
    console.log(file)
    this.fileUploadService.uploadFile(file, this.companyLogoPath).subscribe(downloadURL => {
      console.log(`File available at: ${downloadURL}`);
      this.company.logo = downloadURL;
    });
  }
}
