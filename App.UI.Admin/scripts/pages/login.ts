import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="login-container">
      <h2>Login Page</h2>
      <p>Login functionality will be implemented here.</p>
      <button class="login-btn" (click)="onLogin()">Login</button>
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
  constructor(private router: Router) { }
  
  onLogin(): void {
    // For now, just navigate to dashboard
    // In a real application, you would validate credentials here
    this.router.navigate(['/dashboard']);
  }
} 