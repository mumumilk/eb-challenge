import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
    {
        path: '',
        component: CategoriesComponent,
        children: [
            {
                path: ':category_id',
                children: [
                    {
                        path: '',
                        redirectTo: 'courses',
                        pathMatch: 'full',
                    },
                    {
                        path: 'courses',
                        loadChildren: 'app/courses/courses.module#CoursesModule'
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriesRoutingModule {}
