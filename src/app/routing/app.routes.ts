import { Routes, RouterModule } from '@angular/router';
import { Link1Component,
         Link2Component } from '../home/home.component';

export const AppRouterModule: Routes = [
  { path: 'app-link-1', component: Link1Component },
  { path: 'app-link-2', component: Link2Component },
  { path: '',
    redirectTo: '/app-link-1',
    pathMatch: 'full'
  }
];
