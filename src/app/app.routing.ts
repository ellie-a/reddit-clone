import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewpostComponent } from './home/newpost/newpost.component';
import { PostListComponent } from './home/post-list/post-list.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
     path: '',
     component: HomeComponent
   },
  {
    path: 'newpost',
    component: NewpostComponent
  },
  {
    path: 'postlist',
    component: PostListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
