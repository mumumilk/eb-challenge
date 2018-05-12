import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoryService } from './shared/category.service';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ CategoriesComponent ],
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
