import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../entity/user";
import {Notification} from "../entity/notification";
import {environment} from "../../environment";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CV} from "../entity/CV";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifyUrl: string = environment.apiUrl + '/notify';

  private notifyList: BehaviorSubject<NonNullable<Notification[]>> = new BehaviorSubject<NonNullable<Notification[]>>([]);

  constructor(private route: Router,
              private http: HttpClient) { }

  createNotification(notification:Notification){
    return this.http.post<Notification>(this.notifyUrl, notification);
  }

  findByAccount(accountId:any){
    return this.http.get<Notification[]>(this.notifyUrl + `/account/${accountId}`);
  }
  setNotifications(listNoti:Notification[]){
    this.notifyList.next(listNoti);
  }
  getNotificationsAsObservable(accountId: any): Observable<NonNullable<Notification[]>> {
    return this.notifyList.asObservable();
  }
}
