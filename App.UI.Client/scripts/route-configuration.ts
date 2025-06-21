import { Routes } from '@angular/router';
import { LoginPage } from '@pages/login';
import { Layout } from '@pages/layout';
import { DashboardPage } from '@pages/dashboard';
import { ProfilePage } from '@pages/profile';

export const RouteConfiguration: Routes = [
  { path: '', component: LoginPage },
  { path: 'dashboard', component: Layout, children: [{ path: '', component: DashboardPage }] },
  { path: 'profile', component: Layout, children: [{ path: '', component: ProfilePage }] }
]; 