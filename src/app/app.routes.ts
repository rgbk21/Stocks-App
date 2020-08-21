// Import Router dependencies
import { Routes, RouterModule} from '@angular/router';
// Import App Components that are linked to a route
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';

// Defines a Route Configuration Array
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
