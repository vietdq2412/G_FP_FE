import { Injectable } from '@angular/core';
import {environment} from "../../environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../entity/company";
import {AppUser} from "../entity/appUser";
import {Skill} from "../entity/skill";

@Injectable({
  providedIn: 'root'
})
export class AppUserService {
  private apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  private getToken() {
    return localStorage.getItem("token");
  }

  getAppUserProfile(id: any):Observable<Company> {
    return this.http.get(`${this.apiUrl}/appUser/${id}`);
  }

  updateAppUserProfile(id: number | undefined, appUser: AppUser, DOB:any):Observable<any>{
    console.log("updateAppUserProfile service ", appUser)
    return this.http.put(`${this.apiUrl}/appUser/${id}/${DOB}`,appUser);
  }

  addSkill(appUserId:any, appUser:AppUser){
    return this.http.put(`${this.apiUrl}/addSkill/${appUserId}`,appUser);
  }
}
