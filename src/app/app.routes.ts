import { Routes } from '@angular/router';
import { CategoryListComponent } from './features/categories/category-list/category-list.component';
import { SystemListComponent } from './features/systems/system-list/system-list.component';

export const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent,
  },
  {
    path: 'category/:id',
    component: SystemListComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
