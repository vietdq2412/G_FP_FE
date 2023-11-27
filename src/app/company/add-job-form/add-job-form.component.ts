import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JobService} from "../../services/job.service";
import {Company} from "../../entity/company";
import {AuthService} from "../../services/auth.service";
import {JobCategory} from "../../entity/jobCategory";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../../snack-bar/snack-bar.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-job-form',
  templateUrl: './add-job-form.component.html',
  styleUrls: ['./add-job-form.component.css']
})
export class AddJobFormComponent implements OnInit {
  jobForm: FormGroup;
  jobCategories: any[] | undefined;

  constructor(private fb: FormBuilder,
              private jobService: JobService,
              private route: Router,
              private snackBar: MatSnackBar
  ) {
    this.jobForm = this.fb.group({
      name: ['', Validators.required],
      jobLevel: ['', Validators.required],
      requiredExperience: ['', Validators.required],
      requiredEducation: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      jobCategory: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.jobService.getJobCategories().subscribe(categories => {
      this.jobCategories = categories;
      console.log(this.jobCategories)
    })
  }

  onSubmitAddJob() {
    if (this.jobForm.valid) {
      let id;
      const userStr = localStorage.getItem('userPrinciple');
      if (userStr) {
        id = JSON.parse(userStr).profileId;
      }

      this.jobForm.value.company = new Company(id);

      console.log(this.jobForm.value)
      this.jobService.addJob(this.jobForm.value).subscribe(
        response => {
          console.log('Job added successfully', response);
          this.openSnackBar('Job added successfully', '#34ad22');
          this.route.navigate(['company/jobs']).then(r => {});
        },
        error => {
          console.error('Error adding job', error);
        }
      );
    }
  }

  openSnackBar(messenger:string, bgColor:any) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000,
      data: { message: messenger, bgColor: bgColor },
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
