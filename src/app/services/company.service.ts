import { Injectable } from '@angular/core';
import {environment} from "../../environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../entity/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken() // Add Bearer token
    })
  };
  private getToken() {
    return localStorage.getItem("token");
  }

  getCompanyProfile(id: any):Observable<Company> {
    console.log( this.httpOptions);
    return this.http.get(`${this.apiUrl}/account/getCompanyProfile/${id}`, this.httpOptions);
  }

  updateProfile(id: string | undefined, company: Company):Observable<any>{
    return this.http.put(`${this.apiUrl}/company/${id}`,company, this.httpOptions);
  }
}
