import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../../entity/user";
import {FileUpLoadService} from "../../services/file-up-load.service";
import {AppUserService} from "../../services/app-user.service";
import {environment} from "../../../environment";
import {AppUser} from "../../entity/appUser";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-profile-user',
  templateUrl: './edit-profile-user.component.html',
  styleUrls: ['./edit-profile-user.component.css']
})
export class EditProfileUserComponent implements OnInit {
  appUser: AppUser = new AppUser();
  private appUserAvatarPath: string = environment.appUserAvatarFirebasePath;
  private progressUploadAvatarSubscription: Subscription | undefined;
  uploadProgress: any;

  editForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private fileUploadService: FileUpLoadService,
    private appUserService: AppUserService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditProfileUserComponent>
  ) {
  }

  ngOnInit(): void {
    this.appUser = this.data.appUser;
    console.log(this.appUser)

    this.progressUploadAvatarSubscription = this.fileUploadService.currentProgress.subscribe(
      progress => this.uploadProgress = progress
    );

    this.editForm = this.formBuilder.group({
      name: [this.appUser.name, Validators.required],
      DOB: [this.appUser.DOB, Validators.required],
      address: [this.appUser.address, Validators.required],
      image: [this.appUser.image],
      gender: [this.appUser.gender, Validators.required],
      phoneNumber: [this.appUser.phoneNumber],
      about: [this.appUser.about],
    });
  }

  onAvatarSelected(event: any) {
    const file = event.target.files[0];
    this.fileUploadService.uploadFile(file, this.appUserAvatarPath).subscribe(downloadURL => {
      console.log(`File available at: ${downloadURL}`);
      this.appUser.image = downloadURL;
      this.editForm.value.image = downloadURL;
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.appUser.name = this.editForm.value.name;
      this.appUser.DOB = this.editForm.value.DOB;
      this.appUser.address = this.editForm.value.address;
      this.appUser.image = this.editForm.value.image;
      this.appUser.gender = this.editForm.value.gender;
      this.appUser.phoneNumber = this.editForm.value.phoneNumber;
      this.appUser.about = this.editForm.value.about;
      console.log("submit: ", this.appUser)
      this.appUserService.updateAppUserProfile(this.appUser.id, this.appUser, this.appUser.DOB).subscribe(value => {
        this.openSnackBar("Done!")
        console.log("updateAppUserProfile value: ", value)
        this.dialogRef.close('Update success!');
      })
    }
  }

  openSnackBar(messenger: string) {
    this.snackBar.open(messenger, '', {
      duration: 2000,
      panelClass: ['custom-snackbar-text-color'],
      horizontalPosition: 'right', // 'start' | 'center' | 'end' | 'left' | 'right'
      verticalPosition: 'top', // 'top' | 'bottom'
    });
  }


}
