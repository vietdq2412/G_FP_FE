import {Account} from "./account";

class Notification {
  id?: number;
  title?: string;
  comment?: string;
  status?: boolean;
  createdDate?: Date;
  account?:Account
  jobId?:number;

  constructor(id?: number, title?: string, comment?: string, status?: boolean, createdDate?: Date, account?:Account, jobId?:number) {
    this.id = id;
    this.title = title;
    this.comment = comment;
    this.status = status;
    this.createdDate = createdDate;
    this.account = account;
    this.jobId = jobId;
  }
}

export {Notification}
