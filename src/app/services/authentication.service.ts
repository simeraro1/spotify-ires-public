import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CLIENT_ID, CLIENT_SECRETS, REDIRECT_URI, SCOPES, SPOTIFY_ACCOUNTS_BASE_URL, SPOTIFY_AUTH_TOKEN_NAME } from '../utils/const';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private http = inject(HttpClient);

  public get token() {
    const token = localStorage.getItem(SPOTIFY_AUTH_TOKEN_NAME) ?? '';
    console.log(token);
    return localStorage.getItem(SPOTIFY_AUTH_TOKEN_NAME) ?? '';
  }

  public set token(token: string) {
    localStorage.setItem(SPOTIFY_AUTH_TOKEN_NAME, token)
  }


  public getToken(code: string) {
    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', REDIRECT_URI)
    return this.http.post<{ access_token: string }>(`${SPOTIFY_ACCOUNTS_BASE_URL}/api/token`, body.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRETS)
      }
    });
  }

  public redirectToLogin() {
    const params = new HttpParams()
      .set('client_id', CLIENT_ID)
      .set('response_type', 'code')
      .set('redirect_uri', REDIRECT_URI)
      .set('scope', SCOPES)
    window.location.assign(`${SPOTIFY_ACCOUNTS_BASE_URL}/authorize?` + params.toString());
  }

  private uuid(): string {
    return ('10000000-1000-4000-8000-100000000000').replace(/[018]/g, c => (
      Number(c) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))).toString(16)
    );
  }
}

