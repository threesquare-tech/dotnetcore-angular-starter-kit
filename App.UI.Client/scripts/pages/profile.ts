import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <div class="profile-container">
      <h2>Profile</h2>
      <p>Profile functionality will be implemented here.</p>
    </div>
  `,
  styles: [`
    .profile-container {
      padding: 20px;
    }
  `]
})
export class ProfilePage {
  constructor() { }
} 