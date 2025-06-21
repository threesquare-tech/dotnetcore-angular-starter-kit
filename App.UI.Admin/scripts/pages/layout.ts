import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="layout-container">
      <header class="header">
        <h1>App Layout</h1>
      </header>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .layout-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .header {
      background: #f5f5f5;
      padding: 1rem;
      border-bottom: 1px solid #ddd;
    }
    .main-content {
      flex: 1;
      padding: 1rem;
    }
  `]
})
export class Layout {
  constructor() { }
} 