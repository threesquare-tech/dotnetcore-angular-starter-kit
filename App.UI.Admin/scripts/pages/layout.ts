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
    <button class="btn btn-link text-white me-2" (click)="drawer.toggle()" style="font-size: 1.5rem;">
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
<mat-sidenav-container class="layout">
  <mat-sidenav #drawer class="sidenav" mode="side" opened>
    <mat-nav-list>
      <a mat-list-item routerLink="/dashboard" class="my-1"><mat-icon>dashboard</mat-icon> Dashboard</a>
      <mat-expansion-panel hideToggle class="my-1">
        <mat-expansion-panel-header>
          <mat-panel-title><mat-icon>storefront</mat-icon> Order </mat-panel-title>
        </mat-expansion-panel-header>
        <a mat-list-item routerLink="/orders" class="my-1"><mat-icon>shopping_bag</mat-icon> Orders</a>
        <a mat-list-item routerLink="/customers" class="my-1"><mat-icon>emoji_people</mat-icon> Customers</a>
      </mat-expansion-panel>
      <mat-expansion-panel hideToggle class="my-1">
        <mat-expansion-panel-header>
          <mat-panel-title><mat-icon>lunch_dining</mat-icon> Menu </mat-panel-title>
        </mat-expansion-panel-header>
        <a mat-list-item routerLink="/menu-items">Menu Items</a>
        <a mat-list-item routerLink="/menu-categories">Categories</a>
        <a mat-list-item routerLink="/variations">Variations</a>
      </mat-expansion-panel>
      <mat-expansion-panel hideToggle class="my-1">
        <mat-expansion-panel-header>
         <mat-panel-title> <mat-icon>settings</mat-icon> Settings</mat-panel-title>   
        </mat-expansion-panel-header>
         <a mat-list-item routerLink="/branches">Branches</a>
         <a mat-list-item routerLink="site-settings">Site Settings</a>
         <a mat-list-item routerLink="user-list">User</a>
        </mat-expansion-panel>
    </mat-nav-list>
  </mat-sidenav>
  <mat-sidenav-content class="main-content">
    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>
</ng-template>
  `
})
export class MainLayout implements AfterViewInit {
  @ViewChild('content', { read: TemplateRef }) contentTemplate!: TemplateRef<any>;
  
  constructor(
    protected viewContainerRef: ViewContainerRef,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    this.viewContainerRef.createEmbeddedView(this.contentTemplate);
  }
} 