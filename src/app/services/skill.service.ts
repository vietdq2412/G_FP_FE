import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment";

@Injectable({
  providedIn: 'root'
})
export class SkillService {
    private skillUrl = environment.apiUrl + '/skill';

  constructor(private http: HttpClient) { }

  getSKills(){
    return this.http.get<any[]>(this.skillUrl );
  }
}
