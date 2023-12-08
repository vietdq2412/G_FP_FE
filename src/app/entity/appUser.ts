import {Account} from "./account";
import {Skill} from "./skill";

class AppUser {
  id?: number;
  name?: string;
  DOB?: string;
  email?: string;
  address?: string;
  status?: string;
  image?: string;
  phoneNumber?: string;
  gender?: string;
  about?: string;
  account?: Account;
  skills?: Skill[];

  constructor(
    id?: number,
    name?: string,
    email?: string,
    about?: string,
    address?: string,
    status?: string,
    gender?: string,
    DOB?: string,
    image?: string,
    phoneNumber?: string,
    account?: Account,
    skills?: Skill[]
  ) {
    this.id = id;
    this.name = name;
    this.about = about;
    this.email = email;
    this.address = address;
    this.status = status;
    this.phoneNumber = phoneNumber;
    this.DOB = DOB;
    this.gender = gender;
    this.image = image;
    this.account = account;
    this.skills = skills;
  }
}

export {AppUser}
