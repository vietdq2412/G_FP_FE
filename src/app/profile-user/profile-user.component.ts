import {Component} from '@angular/core';
import {User} from "../entity/user";
import {Router} from "@angular/router";
import {AppUser} from "../entity/appUser";
import {AppUserService} from "../services/app-user.service";
import {CV} from "../entity/CV";
import {CvService} from "../services/cv.service";
import {MatDialog} from "@angular/material/dialog";
import {Job} from "../entity/job";
import {EditJobFormComponent} from "../job/edit-job-form/edit-job-form.component";
import {EditProfileUserComponent} from "./edit-profile-user/edit-profile-user.component";
import {AddSkillComponent} from "./add-skill/add-skill.component";

@Component({
    selector: 'app-profile-user',
    templateUrl: './profile-user.component.html',
    styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent {
    private user: User = new User();
    appUser: AppUser = new AppUser();
    CVs: CV[] = [];

    constructor(
        private appUserService: AppUserService,
        private cvService: CvService,
        private router: Router,
        public dialog: MatDialog,

    ) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    openEditUserProfileDialog(appUser: AppUser): void {
        const dialogRef = this.dialog.open(EditProfileUserComponent, {
            width: '44%',
            maxHeight: '90vh',
            panelClass: "EditProfileDialog",
            data: {appUser: appUser}
        });
        dialogRef.afterClosed().subscribe(result => {
            this.loadData();
        });
    }

    viewDetailJob(id: number | undefined) {
        this.router.navigate(["job/job-detail/" + id]);
    }

    private loadData() {
        const userStr = localStorage.getItem('userPrinciple');
        if (userStr) {
            this.user = JSON.parse(userStr);
        }
        this.appUserService.getAppUserProfile(this.user.profileId).subscribe(appUser => {
            this.appUser = appUser;
        });
        this.cvService.getCVsByAppUserId(this.user.profileId).subscribe(CVs => {
            this.CVs = CVs;
        });
    }

    editAppUserForm() {
        this.openEditUserProfileDialog(this.appUser);
    }

  openAddSkillFormDialog(appUserId:any) {
    const dialogRef = this.dialog.open(AddSkillComponent, {
      width: '30%',
      maxHeight: '30vh',
      panelClass: "AddSkillDialog",
      data: {appUser: this.appUser}
    });
    dialogRef.afterClosed().subscribe(result => {
        if(result){
            console.log("openAddSkillFormDialog result: ", result);
        }
      this.loadData();
    });
  }
}
