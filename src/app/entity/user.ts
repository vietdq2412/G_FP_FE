export class User{
  id?:string;
  name?:string;
  token?:string;
  role?:string|null;

  constructor(id?:string, name?: string, token?: string, role?: string) {
    this.id = id;
    this.name = name;
    this.token = token;
    this.role = role;
  }
}
