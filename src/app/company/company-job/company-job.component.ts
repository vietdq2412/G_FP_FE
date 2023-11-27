import {Component, OnInit} from '@angular/core';
import {JobService} from "../../services/job.service";
import {Job} from "../../entity/job";
import {Company} from "../../entity/company";
import {JobCategory} from "../../entity/jobCategory";
import {Account} from "../../entity/account";
import {Router} from "@angular/router";


@Component({
  selector: 'app-company-job',
  templateUrl: './company-job.component.html',
  styleUrls: ['./company-job.component.css']
})
export class CompanyJobComponent implements OnInit{
  jobs: Job[] = [];
  constructor(private jobService: JobService,
              private router: Router) {
  }

  ngOnInit(): void {
    let id = localStorage.getItem('profileId');
    this.jobService.getJobsByCompanyId(id).subscribe(
      (data) => {
        this.jobs = data
        console.log("lis jobs", this.jobs)
      },
      (error) => {
        if (error.status == 403 || error.status == 401) this.router.navigate(['login-page']);
      }
    );
  }
}
