import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JobService} from "../../services/job.service";
import {Job} from "../../entity/job";
import {EditJobFormComponent} from "../edit-job-form/edit-job-form.component";
import {MatDialog} from "@angular/material/dialog";
import {SnackBarComponent} from "../../snack-bar/snack-bar.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ApplyCVFormComponent} from "../apply-cv-form/apply-cv-form.component";
import {CV} from "../../entity/CV";
import {CvService} from "../../services/cv.service";

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
  isApplied: boolean = false;
  checkJobAndCompany: boolean = false;

  cvs: CV[] = [];

  constructor(
    private jobService: JobService,
    private cvService: CvService,
    public dialog: MatDialog,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.accountRole = localStorage.getItem("role");
    this.profileId = localStorage.getItem("profileId");

    this.loadData();

  }

  openEditJobDialog(job: Job): void {
    const dialogRef = this.dialog.open(EditJobFormComponent, {
      width: '44%',
      maxHeight: '90vh',
      panelClass: "EditJobDialog",
      data: {job: job}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

  openApplyCvDialog(jobId: any, profileId: any): void {
    const dialogRef = this.dialog.open(ApplyCVFormComponent, {
      width: '44%',
      maxHeight: '90vh',
      panelClass: "ApplyCvDialog",
      data: {
        jobId: this.job.id,
        profileId: this.profileId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.loadData();
        this.openSnackBar("apply success!", '#75e76d')
      }
    });
  }

  applyCv() {
    this.openApplyCvDialog(this.job.id, this.profileId);
  }

  deleteJob() {
    if (confirm("Are you sure to delete this job?")) {
      this.jobService.deleteJob(this.job.id).subscribe(data => {
        this.openSnackBar('Job deleted!', '#e7b96d');
        this.route.navigate(['company/jobs']).then(r => {
        });
      })
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

  private loadData() {
    this.jobService.getJobById(this.id).subscribe(data => {
      this.job = data;
      this.checkJobAndCompany = this.accountRole == 'ROLE_COMPANY' && this.job.company?.id == this.profileId;
    });

    this.cvService.getCVsByJobId(this.id).subscribe(cv => {
      this.cvs = cv;
      if(this.cvs.find(cv => cv.appUser?.id == this.profileId)){
        this.isApplied = true;
      }
    });
  }
}
