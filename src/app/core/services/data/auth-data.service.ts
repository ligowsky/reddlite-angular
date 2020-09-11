import { Auth, AuthCredentials, getAuthModel } from '../../models';
import { AuthApiContract } from '../../contracts';
import { BaseDataService } from './base-data.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthDataService extends BaseDataService {
  constructor(private http: HttpClient) {
    super();
  }

  public login$(credentials: AuthCredentials): Observable<Auth> {
    this.url = `${this.backendUrl}/auth/local`;
    const body: AuthCredentials = credentials;

    return this.http
      .post(this.url, body, {
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<AuthApiContract>) => response.body),
        map((auth: AuthApiContract) => getAuthModel(auth))
      );
  }
}
