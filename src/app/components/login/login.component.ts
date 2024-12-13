import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authenticationService = inject(AuthenticationService);

  ngOnInit() {
    this.authenticationService.redirectToLogin();
  }
}
