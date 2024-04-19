import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CV} from "../entity/CV";
import {environment} from "../../environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvUrl: string = environment.apiUrl + '/cv';

  constructor(private http: HttpClient) {
  }

  applyCv(cv: CV) {
    return this.http.post<CV>(this.cvUrl, cv);
  }

  acceptCv(cvId: any): Observable<any> {
    return this.http.get<any>(this.cvUrl + `/accept/${cvId}`);
  }
  rejectCv(cvId: any): Observable<any> {
    return this.http.get<any>(this.cvUrl + `/reject/${cvId}`);
  }
  getCVsByJobId(jobId: any): Observable<any[]> {
    return this.http.get<any[]>(this.cvUrl + `/job/${jobId}`);
  }

  getCVsByAppUserId(jobId: any): Observable<any[]> {
    return this.http.get<any[]>(this.cvUrl + `/appUser/${jobId}`);
  }

}
