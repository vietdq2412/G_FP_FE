import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {User} from "../entity/user";

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('userPrinciple');
  const router = inject(Router);
  if (token){
    return true;
  }else {
    router.navigate(['login-page']);
    return false;
  }
};

export const adminGuard: CanActivateFn = (route, state) => {
  const userStr = localStorage.getItem('userPrinciple')
  let user: User = new User();
  if (userStr){
    user = JSON.parse(userStr);
  }
  const router = inject(Router);
  if (user.role == 'admin'){
    return true;
  }else {
    console.log('er: 403! required admin!')
    router.navigate(['login-page']);
    return false;
  }
};

export const companyGuard: CanActivateFn = (route, state) => {
  const userStr = localStorage.getItem('userPrinciple')
  let user: User = new User();
  if (userStr){
    user = JSON.parse(userStr);
  }
  const router = inject(Router);
  if (user.role == 'company' || user.role == 'admin'){
    return true;
  }else {
    console.log('er: 403! required company!')
    router.navigate(['login-page']);
    return false;
  }
};
