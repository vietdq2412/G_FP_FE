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
  private apiUrl = environment.apiUrl + "/appUser";
  constructor(private http:HttpClient) { }

  private getToken() {
    return localStorage.getItem("token");
  }

  getAppUserProfile(id: any):Observable<Company> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateAppUserProfile(id: number | undefined, appUser: AppUser, DOB:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}/${DOB}`,appUser);
  }

  addSkill(appUserId:any, skillId:any){
    return this.http.put(`${this.apiUrl}/addSkill/${appUserId}/${skillId}`,'');
  }

  deleteSkill(appUserId:any, skillId:any) {
    return this.http.put(`${this.apiUrl}/deleteSkill/${appUserId}/${skillId}`,'');
  }
}
