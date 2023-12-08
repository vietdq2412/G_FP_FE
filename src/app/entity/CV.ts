import {AppUser} from "./appUser";
import {Job} from "./job";

export class CV {
  id?: string;
  job?: Job;
  path?: string;
  status?: string;
  comment?: string;
  appUser?: AppUser;

  constructor(id?: string, path?: string, status?: string, comment?: string, appUser?: AppUser) {
    this.id = id;
    this.path = path;
    this.status = status;
    this.appUser = appUser;
    this.comment = comment;

  }

}
