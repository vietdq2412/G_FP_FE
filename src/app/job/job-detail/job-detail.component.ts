import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JobService} from "../../services/job.service";
import {Job} from "../../entity/job";
import {EditJobFormComponent} from "../edit-job-form/edit-job-form.component";
import {MatDialog} from "@angular/material/dialog";
import {SnackBarComponent} from "../../snack-bar/snack-bar.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  id !: string | null;
  job: Job = new Job();
  accountRole: any;
  profileId: any;
  checkJobCompany: boolean = false;

  constructor(private jobService: JobService,
              public dialog: MatDialog,
              private route: Router,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.accountRole = localStorage.getItem("role");
    this.profileId = localStorage.getItem("profileId");
    console.log("JobDetailComponent role: ", this.accountRole);
    this.jobService.getJobById(this.id).subscribe(data => {
      this.job = data;
      this.checkJobCompany = this.accountRole == 'ROLE_COMPANY' && this.job.company?.id == this.profileId;
    });
  }

  openEditJobDialog(job: Job): void {
    const dialogRef = this.dialog.open(EditJobFormComponent, {
      width: '44%',
      maxHeight: '90vh',
      panelClass: "EditJobDialog",
      data: {job: job}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  applyCv() {

  }

  deleteJob() {
    if (confirm("Are you sure to delete this job?")){
        this.jobService.deleteJob(this.job.id).subscribe(data =>{
            this.openSnackBar('Job deleted!', '#e7b96d');
            this.route.navigate(['company/jobs']).then(r => {});
        })
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
