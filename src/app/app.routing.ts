import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakeRealNewsComponent } from './fake-real-news/fake-real-news.component';
import { RealFakeNewsComponent } from './real-fake-news/real-fake-news.component';
import { HomePageComponent } from './home-page/home-page.component';



const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'fake-real',
    component: FakeRealNewsComponent
  },
  {
    path: 'real-fake',
    component: RealFakeNewsComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
