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

  getJobCategories(){
    return this.http.get<any[]>(this.jobsUrl + '/listJobCategories');
  }


  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.jobsUrl);
  }
  getJobsByCompanyId(companyId:any): Observable<any[]> {
    return this.http.get<any[]>(this.jobsUrl + `/company/${companyId}`);
  }
  getJobsByCvSubmitted(appUserId:any): Observable<any[]> {
    return this.http.get<any[]>(this.jobsUrl + `/getAllJobsByAppUserSubmittedCV/${appUserId}`);
  }
  getJobById(id:any): Observable<any> {
    return this.http.get<Job>(this.jobsUrl + "/" + id);
  }

  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.jobsUrl, job);
  }

  updateJob(job: Job): Observable<Job> {
    return this.http.put<Job>(this.jobsUrl + `/${job.id}`, job);
  }

  deleteJob(jobId: any) {
    return this.http.delete<any>(this.jobsUrl + `/${jobId}`);
  }
}
