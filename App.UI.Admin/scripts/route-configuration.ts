import { Routes } from '@angular/router';
import { LoginPage } from '@pages/login';
import { MainLayout } from '@pages/layout';
import { DashboardPage } from '@pages/dashboard';
import { ProfilePage } from '@pages/profile';

export const RouteConfiguration: Routes = [
  { path: '', component: LoginPage },
  { path: 'dashboard', component: MainLayout, children: [{ path: '', component: DashboardPage }] },
  { path: 'profile', component: MainLayout, children: [{ path: '', component: ProfilePage }] }
]; 