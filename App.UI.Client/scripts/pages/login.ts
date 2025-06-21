import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="login-container">
      <h2>Login Page</h2>
      <p>Login functionality will be implemented here.</p>
    </div>
  `,
  styles: [`
    .login-container {
      padding: 20px;
      text-align: center;
    }
  `]
})
export class LoginPage {
  constructor() { }
} 