// import { CanActivateFn } from '@angular/router';

// export const AuthGuard: CanActivateFn = (route, state) => {
//   return true;
// };




// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { SESSION } from '../models/constants';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router) {}

//   canActivate(): boolean {
//     const token = localStorage.getItem(SESSION.JWT_TOKEN);

//     if (!token) {
//       this.router.navigate(['/login']);
//       return false;
//     }

//     // Optional: You can validate token expiration here

//     return true;
//   }
// }

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { SESSION } from '../models/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  canActivate(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    
    const token = localStorage.getItem(SESSION.JWT_TOKEN);
    
    if (!token) {
      this.router.navigate(['/']);
      return false;
    }
    
    return true;
  }
}