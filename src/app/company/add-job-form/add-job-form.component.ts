import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JobService} from "../../services/job.service";
import {Company} from "../../entity/company";
import {Location} from "../../entity/location";

import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../../snack-bar/snack-bar.component";
import {Router} from "@angular/router";
import {JobType} from "../../entity/jobType";
import {Job} from "../../entity/job";

@Component({
  selector: 'app-add-job-form',
  templateUrl: './add-job-form.component.html',
  styleUrls: ['./add-job-form.component.css']
})
export class AddJobFormComponent implements OnInit {
  jobForm: FormGroup;
  jobCategories: any[] = [];
  jobTypes: JobType[] = [];
  listLocation: Location[] = [];
  job: Job = new Job();
  minDate: Date = new Date();


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
      location: [{}, Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required],
      jobCategory: ['', Validators.required],
      jobType: [{}, Validators.required],
      expiredDate: [this.getStrDate(new Date().toISOString()), Validators.required],
    });
  }

  ngOnInit(): void {
    this.minDate.setDate(this.minDate.getDate() + 2)
    console.log(new Date().toISOString())
    this.jobService.getLocations().subscribe(data => {
      this.listLocation = data;
    })
    this.jobService.getJobTypes().subscribe(data => {
      this.jobTypes = data;
    })
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

      console.log("this.jobForm.value.expiredDate: ", this.jobForm.value.expiredDate)
      this.jobForm.value.expiredDate = new Date(this.jobForm.value.expiredDate);
      console.log("this.jobForm.value.expiredDate: ", this.jobForm.value.expiredDate)

      console.log(this.jobForm.value)
      this.jobService.addJob(this.jobForm.value).subscribe(
        response => {
          console.log('Job added successfully', response);
          this.openSnackBar('Job added successfully', '#34ad22');
          this.route.navigate(['company/jobs']).then(r => {
          });
        },
        error => {
          console.error('Error adding job', error);
        }
      );
    }
  }

  openSnackBar(messenger: string, bgColor: any) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000,
      data: {message: messenger, bgColor: bgColor},
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  getStrDate(strDate: string): string {
    const currentDate = new Date(strDate);
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // +1 because months are 0-indexed
    const day = currentDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  onItemSelect(item: any) {
    console.log(item); // Handle selected item
  }

  onSelectAll(items: any) {
    console.log(items); // Handle all selected items
  }
}
