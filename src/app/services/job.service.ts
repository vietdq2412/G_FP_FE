import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Job} from "../entity/job";
import {environment} from "../../environment";

@Injectable({
    providedIn: 'root'
})
export class JobService {

    private jobsUrl = environment.apiUrl + '/jobs';

    constructor(private http: HttpClient) {
    }

    getJobCategories() {
        return this.http.get<any[]>(this.jobsUrl + '/listJobCategories');
    }

    getLocations() {
        return this.http.get<any[]>(this.jobsUrl + '/listLocations');
    }

    getJobTypes() {
        return this.http.get<any[]>(this.jobsUrl + '/jobTypes');
    }

    getAvailableJobs(): Observable<any[]> {
        return this.http.get<any[]>(this.jobsUrl + '/available');
    }
    getJobsAvailable(): Observable<any[]> {
        return this.http.get<any[]>(this.jobsUrl);
    }

    getJobsByCompanyId(companyId: any): Observable<any[]> {

        return this.http.get<any[]>(this.jobsUrl + `/company/${companyId}`);
    }

    getJobById(id: any): Observable<any> {
        return this.http.get<Job>(this.jobsUrl + "/" + id);
    }

    addJob(job: Job): Observable<Job> {
      console.log("abc: url ", this.jobsUrl)
        return this.http.post<Job>(this.jobsUrl, job);
    }

    updateJob(job: Job): Observable<Job> {
        return this.http.put<Job>(this.jobsUrl + `/${job.id}`, job);
    }

    deleteJob(jobId: any) {
        return this.http.delete<any>(this.jobsUrl + `/${jobId}`);
    }

    searchJobs(searchText: string, selectedCategory: string, selectedJobType: string, selectedLocation: string) {
        let params = new HttpParams();
        params = params.append('name', searchText);
        if (selectedCategory) params = params.append('categoryId', selectedCategory);
        if (selectedJobType) params = params.append('jobTypeId', selectedJobType);
        if (selectedLocation) params = params.append('locationId', selectedLocation);
        return this.http.get<any>(this.jobsUrl + "/search", {params});
    }
}
