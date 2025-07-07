import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModuleMaterialUI } from '../module-materials';
import { ViewChild, TemplateRef, ViewContainerRef, AfterViewInit, Directive } from '@angular/core';

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [RouterModule, CommonModule, ModuleMaterialUI],
  template: `
<ng-template #content>
<nav class="navbar navbar-expand-sm bg-primary fixed-top">
  <div class="container-fluid">
    <button class="btn btn-link text-white me-2" (click)="toggleSidebar()" style="font-size: 1.5rem;">
      <i class="bi bi-list"></i>
    </button>
    <a class="navbar-brand d-flex align-items-center" href="javascript:">
      <i class="bi bi-star-fill me-2"></i>Admin
    </a>
    <span class="flex-spacer"></span>
    <a class="btn btn-outline-light ms-2" href="/manage/logout">
      <i class="bi bi-power"></i> Sign Out
    </a>
  </div>
</nav>

<div class="container-fluid">
  <div class="row">
    <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" [class.show]="sidebarOpen">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" routerLink="/dashboard" routerLinkActive="active">
              <i class="bi bi-speedometer2 me-2"></i>
              Dashboard
            </a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#orderCollapse" role="button" aria-expanded="false" aria-controls="orderCollapse">
              <i class="bi bi-shop me-2"></i>
              Order
              <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <div class="collapse" id="orderCollapse">
              <ul class="nav flex-column ms-3">
                <li class="nav-item">
                  <a class="nav-link" routerLink="/orders">
                    <i class="bi bi-bag me-2"></i>Orders
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" routerLink="/customers">
                    <i class="bi bi-people me-2"></i>Customers
                  </a>
                </li>
              </ul>
            </div>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#menuCollapse" role="button" aria-expanded="false" aria-controls="menuCollapse">
              <i class="bi bi-cup-hot me-2"></i>
              Menu
              <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <div class="collapse" id="menuCollapse">
              <ul class="nav flex-column ms-3">
                <li class="nav-item">
                  <a class="nav-link" routerLink="/menu-items">Menu Items</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" routerLink="/menu-categories">Categories</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" routerLink="/variations">Variations</a>
                </li>
              </ul>
            </div>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#settingsCollapse" role="button" aria-expanded="false" aria-controls="settingsCollapse">
              <i class="bi bi-gear me-2"></i>
              Settings
              <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <div class="collapse" id="settingsCollapse">
              <ul class="nav flex-column ms-3">
                <li class="nav-item">
                  <a class="nav-link" routerLink="/branches">Branches</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" routerLink="/site-settings">Site Settings</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" routerLink="/user-list">User</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-content">
      <router-outlet></router-outlet>
    </main>
  </div>
</div>
</ng-template>
  `
})
export class MainLayout implements AfterViewInit {
  @ViewChild('content', { read: TemplateRef }) contentTemplate!: TemplateRef<any>;
  sidebarOpen = true;
  
  constructor(
    protected viewContainerRef: ViewContainerRef,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    this.viewContainerRef.createEmbeddedView(this.contentTemplate);
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
} 