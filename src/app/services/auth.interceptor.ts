import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { SPOTIFY_API_BASE_URL } from '../utils/const';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Check if the request is for the Spotify API
  if (!req.url.startsWith(SPOTIFY_API_BASE_URL)) {
    return next(req);
  }
  const authenticationService = inject(AuthenticationService);
  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${authenticationService.token}`)
  });
  return next(authReq)
};
