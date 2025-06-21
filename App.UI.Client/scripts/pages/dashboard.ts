import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="dashboard-container">
      <h2>Dashboard</h2>
      <p>Dashboard functionality will be implemented here.</p>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 20px;
    }
  `]
})
export class DashboardPage {
  constructor() { }
} 