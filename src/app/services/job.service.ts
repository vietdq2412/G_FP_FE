import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Job} from "../entity/job";
import {environment} from "../../environment";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobsUrl = environment.apiUrl + '/jobs';
  constructor(private http: HttpClient) {}

  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.jobsUrl);
  }
  getJobsByCompanyId(companyId:any): Observable<any[]> {
    return this.http.get<any[]>(this.jobsUrl + `/company/${companyId}`);
  }
  getJobById(id:any): Observable<any> {
    return this.http.get<Job>(this.jobsUrl + "/" + id);
  }

  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.jobsUrl, job);
  }

  getJobCategories(){
    return this.http.get<any[]>(this.jobsUrl + '/listJobCategories');
  }

  deleteJob(jobId: any) {
    return this.http.delete<any>(this.jobsUrl + `/${jobId}`);
  }
}
