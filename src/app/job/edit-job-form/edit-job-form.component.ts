import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JobService} from "../../services/job.service";
import {AuthService} from "../../services/auth.service";
import {Company} from "../../entity/company";
import {ActivatedRoute} from "@angular/router";
import {Job} from "../../entity/job";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-job-form',
  templateUrl: './edit-job-form.component.html',
  styleUrls: ['./edit-job-form.component.css']
})
export class EditJobFormComponent implements OnInit {
  jobForm: FormGroup;
  jobCategories: any[] | undefined;
  private job: Job = new Job();
  private id: any;

  constructor(private fb: FormBuilder,
              private jobService: JobService,
              private authService: AuthService,
              private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<EditJobFormComponent>
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
    this.job = this.data.job;

    this.jobForm = this.fb.group({
      name: [this.job.name, Validators.required],
      jobLevel: [this.job.jobLevel, Validators.required],
      requiredExperience: [this.job.requiredExperience, Validators.required],
      requiredEducation: [this.job.requiredEducation, Validators.required],
      location: [this.job.location, Validators.required],
      description: [this.job.description, Validators.required],
      jobCategory: [this.job.jobCategory, Validators.required],
    });


    this.jobService.getJobCategories().subscribe(categories => {
      this.jobCategories = categories;
    })
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

}
