import { Auth, AuthCredentials } from '../models';
import { AuthDataService } from './data/auth-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authDataService: AuthDataService) {}

  public login$(credentials: AuthCredentials): void {
    this.authDataService
      .login$(credentials)
      .subscribe((auth: Auth) => console.log(auth));
  }
}
