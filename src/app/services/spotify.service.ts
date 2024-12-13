import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { SPOTIFY_API_URL } from '../utils/const';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private http = inject(HttpClient);

  public getTopTracks() {
    return this.http.get<any>(`${SPOTIFY_API_URL}/me/top/tracks`);
  }

  public getUserInfo() {
    return this.http.get<any>(`${SPOTIFY_API_URL}/me`);
  }
}
