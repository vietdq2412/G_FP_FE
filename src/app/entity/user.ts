export class User{
  accountId?:string;
  profileId?:string;
  username?:string;
  status?:string;
  token?:string;
  role?:string|null;

  constructor(id?:string,profileId?:string, username?: string,status?: string, token?: string, role?: string) {
    this.accountId = id;
    this.profileId = profileId;
    this.username = username;
    this.status = status;
    this.token = token;
    this.role = role;
  }
}
