import {Account} from "./account";

class Company {
  id?: number;
  name?: string;
  about?: string;
  email?: string;
  address?: string;
  status?: string;
  logo?: string;
  account?: Account;

  constructor(
    id?: number,
    name?: string,
    email?: string,
    about?: string,
    address?: string,
    status?: string,
    logo?: string,
    account?: Account
  ) {
    this.id = id;
    this.name = name;
    this.about = about;
    this.email = email;
    this.address = address;
    this.status = status;
    this.logo = logo;
    this.account = account;
  }
}

export {Company}
