import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  // Inject login service
  const authenticationService = inject(AuthenticationService);

  // If there is no token, redirect to login
  if (!authenticationService.token) {

    inject(Router).navigate(['/login']);

    return false;
  }
  return true;
};
