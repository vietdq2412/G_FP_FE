import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FileUpLoadService} from "../services/file-up-load.service";
import {Company} from "../entity/company";
import {AuthService} from "../services/auth.service";
import {CompanyService} from "../services/company.service";
import {User} from "../entity/user";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "../../environment";

@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
  styleUrls: ['./profile-company.component.css']
})
export class ProfileCompanyComponent implements OnInit {
  private companyLogoPath: string = environment.logoFirebasePath;
  private user: User = new User();
  company: Company = new Company();
  companyForm: any;

  constructor(private storage: AngularFireStorage,
              private fileUploadService: FileUpLoadService,
              private companyService: CompanyService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    const userStr = localStorage.getItem('userPrinciple');
    if (userStr) {
      this.user = JSON.parse(userStr);
      console.log("cpn user: ", this.user)
    }

    this.companyService.getCompanyProfile(this.user.profileId).subscribe(company => {
        this.company = company;
        console.log("cpn", this.company)
      },
      (error) => {
        console.log(error)
        if (error.status == 403 || error.status == 401) this.router.navigate(['login-page']);
      });

    this.companyForm = new FormGroup({
      'name': new FormControl(this.company.name, Validators.required),
      'about': new FormControl(this.company.about),
      'address': new FormControl(this.company.address),
      'status': new FormControl(this.company.status),
    });
  }

  openSnackBar(messenger:string) {

    this.snackBar.open(messenger, '', {
      duration: 2000,
      panelClass: ['custom-snackbar-text-color'],
      horizontalPosition: 'right', // 'start' | 'center' | 'end' | 'left' | 'right'
      verticalPosition: 'top', // 'top' | 'bottom'
    });
  }

  onLogoSelected(event: any) {
    const file = event.target.files[0];
    console.log(file)
    this.fileUploadService.uploadFile(file, this.companyLogoPath).subscribe(downloadURL => {
      console.log(`File available at: ${downloadURL}`);
      this.company.logo = downloadURL;
    });
  }


  onSubmit() {
    console.log("submit: ", this.company)
    this.companyService.updateProfile(this.user.profileId,this.company).subscribe(value => {
      console.log(value)
      this.openSnackBar("Done!")
    })
  }
}
