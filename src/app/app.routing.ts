import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';



const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'articles/:id',
    component: ArticleDetailComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
