import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-callback',
  imports: [],
  template: ``,
})
export class CallbackComponent {
  private readonly activateRoute = inject(ActivatedRoute);
  private readonly authenticationService = inject(AuthenticationService);
  private readonly router = inject(Router);

  ngOnInit() {
    this.activateRoute.queryParams.pipe(
      switchMap(params => this.authenticationService.getToken(params['code']))
    ).subscribe({
      next: (res: { access_token: string }) => {
        this.authenticationService.token = res.access_token;
        this.router.navigate(['/home']);
      },
      error: error => console.error(error)
    })
  }

}
