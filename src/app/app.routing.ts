import { Routes } from '@angular/router';

export const routes: Routes = [
  {
      path: '',
      redirectTo: 'categories',
      pathMatch: 'full'
  },
  {
      path: 'categories',
      loadChildren: 'app/categories/categories.module#CategoriesModule'
  }
];
