import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoryService } from './shared/category.service';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
    declarations: [
        CategoriesComponent,
        CategoryListComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        CategoriesRoutingModule,
        HttpClientModule
    ],
    exports: [ CategoriesComponent ],
    providers: [ CategoryService ],
})
export class CategoriesModule {}
