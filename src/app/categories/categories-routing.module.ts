import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
    {
        path: '',
        component: CategoriesComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriesRoutingModule {}
