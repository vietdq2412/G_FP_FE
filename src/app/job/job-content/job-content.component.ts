import {Component, OnInit} from '@angular/core';
import {Job} from "../../entity/job";
import {JobService} from "../../services/job.service";
import {Router} from "@angular/router";
import {JobCategory} from "../../entity/jobCategory";
import {JobType} from "../../entity/jobType";
import {Location} from "../../entity/location";

@Component({
  selector: 'app-job-content',
  templateUrl: './job-content.component.html',
  styleUrls: ['./job-content.component.css']
})
export class JobContentComponent implements OnInit{
    jobs: Job[] = [];
    listJobCategories: JobCategory[] = [];
    listJobTypes: JobType[] = [];
    listLocations: Location[] = [];
    searchText: string = '';
    selectedCategory: string = '';
    selectedJobType: string = '';
    selectedLocation: string = '';
    constructor(private jobService: JobService,
                private router: Router) {
    }
    ngOnInit(): void {
        let id = localStorage.getItem('profileId');
        this.jobService.getAvailableJobs().subscribe(
            (data) => {
                this.jobs = data
                console.log("lis jobs", this.jobs)
            }
        );
        this.jobService.getLocations().subscribe(data => {
            this.listLocations = data;
        })
        this.jobService.getJobTypes().subscribe(data => {
            this.listJobTypes = data;
        })
        this.jobService.getJobCategories().subscribe(categories => {
            this.listJobCategories = categories;
        })
    }

    search() {

        this.jobService.searchJobs(this.searchText, this.selectedCategory, this.selectedJobType, this.selectedLocation)
            .subscribe(
                data => {
                    this.jobs = data
                },
                error => {
                    // Handle errors
                }
            );
    }
}
