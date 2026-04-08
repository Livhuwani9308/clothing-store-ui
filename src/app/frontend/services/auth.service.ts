import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ROUTE, SESSION } from '../../models/constants';
import { Router } from '@angular/router';
import { IResponseToken } from '../../models/response/response-token';
import { env } from '../../../environments/env.prod';
import { IUserDto } from '../../models/user/user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(user: any) {
    return this.http.post<IResponseToken<IUserDto>>(`${env.apiBaseUrl}${ROUTE.LOGIN}`, user).pipe(
      map((response) => {
        if (response.isSuccess) {
          localStorage.setItem(SESSION.JWT_TOKEN, response.token ?? "");
        }
        return response;
      })
    );
  }

  logout() {
    localStorage.removeItem(SESSION.JWT_TOKEN);
    // this.currentUser.set(null);
    // this.authService.clearToken();
  }
}
