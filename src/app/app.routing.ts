import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewpostComponent } from './newpost/newpost.component';

const appRoutes: Routes = [
  {
     path: '',
     component: HomeComponent
   },
  {
    path: 'newpost',
    component: NewpostComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
