import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Responze } from '../interface/responze.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<Responze> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<Responze> {
    return this.userService.getUser(route.paramMap.get('uuid')!)
  }
}
