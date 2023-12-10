import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JobService} from "../../../services/job.service";
import {AuthService} from "../../../services/auth.service";
import {Company} from "../../../entity/company";
import {ActivatedRoute} from "@angular/router";
import {Job} from "../../../entity/job";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Location} from "../../../entity/location";

@Component({
  selector: 'app-edit-job-form',
  templateUrl: './edit-job-form.component.html',
  styleUrls: ['./edit-job-form.component.css']
})
export class EditJobFormComponent implements OnInit {
  jobForm: FormGroup;
  jobCategories: any[] | undefined;
  jobTypes: any[] | undefined;
  job: Job = new Job();
  listLocation:Location[] = []
  minDate: Date = new Date();

  constructor(private fb: FormBuilder,
              private jobService: JobService,
              private authService: AuthService,
              private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<EditJobFormComponent>
  ) {
    this.jobForm = this.fb.group({
      name: [this.job.name, Validators.required],
      jobLevel: [this.job.jobLevel, Validators.required],
      requiredExperience: [this.job.requiredExperience, Validators.required],
      requiredEducation: [this.job.requiredEducation, Validators.required],
      location: [this.job.location, Validators.required],
      address: [this.job.address, Validators.required],
      description: [this.job.description, Validators.required],
      jobCategory: [this.job.jobCategory, Validators.required],
      jobType: [this.job.jobType, Validators.required],
      // @ts-ignore
      expiredDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.job = this.data.job;
    if (this.minDate){
      if (this.job.expiredDate) {
        this.minDate = new Date(this.job.expiredDate);
      }
      this.minDate.setDate(this.minDate.getDate()+2)
    }

    this.jobService.getLocations().subscribe(data=>{
      this.listLocation = data;
    })

    this.jobService.getJobTypes().subscribe(data => {
      this.jobTypes = data;
    })

    this.jobService.getJobCategories().subscribe(categories => {
      this.jobCategories = categories;
    })

    this.jobForm = this.fb.group({
      name: [this.job.name, Validators.required],
      jobLevel: [this.job.jobLevel, Validators.required],
      requiredExperience: [this.job.requiredExperience, Validators.required],
      requiredEducation: [this.job.requiredEducation, Validators.required],
      location: [this.job.location, Validators.required],
      address: [this.job.address, Validators.required],
      description: [this.job.description, Validators.required],
      jobCategory: [this.job.jobCategory, Validators.required],
      jobType: [this.job.jobType, Validators.required],
      // @ts-ignore
      expiredDate: [this.getStrDate(this.job.expiredDate), Validators.required],
    });
  };


  onSubmitUpdateJob() {

    this.jobForm.value.company = new Company(this.job.company?.id);
    this.jobForm.value.id = this.job.id;

    console.log(this.jobForm.value)
    this.jobService.updateJob(this.jobForm.value).subscribe(
      response => {
        console.log('Job updated successfully', response);
        this.dialogRef.close('Update success!');
      },
      error => {
        console.error('Error updating job', error);
      }
    );
  };

  getStrDate(strDate:string): string {
    const currentDate = new Date(strDate);
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // +1 because months are 0-indexed
    const day = currentDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}
