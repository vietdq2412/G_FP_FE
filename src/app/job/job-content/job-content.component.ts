import {Component, OnInit} from '@angular/core';
import {Job} from "../../entity/job";
import {JobService} from "../../services/job.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-job-content',
  templateUrl: './job-content.component.html',
  styleUrls: ['./job-content.component.css']
})
export class JobContentComponent implements OnInit{
    jobs: Job[] = [];
    constructor(private jobService: JobService,
                private router: Router) {
    }
    ngOnInit(): void {
        let id = localStorage.getItem('profileId');
        this.jobService.getJobs().subscribe(
            (data) => {
                this.jobs = data
                console.log("lis jobs", this.jobs)
            }
        );
    }
}
