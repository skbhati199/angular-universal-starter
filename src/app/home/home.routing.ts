import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      meta: {
        title: 'home.title',
        description: 'home description'
      }
    }
  },
];

export const HomeRoutes = RouterModule.forChild(routes);
