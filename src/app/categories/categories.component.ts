import { Component, OnInit } from '@angular/core';
import { CategoryService } from './shared/category.service';

@Component({
    selector: 'app-categories',
    template: `
        <mat-drawer-container style="width: 100vw; height: 100vh">
            <mat-drawer mode="side" opened="true">Drawer content</mat-drawer>
            <mat-drawer-content>Main content</mat-drawer-content>
        </mat-drawer-container>
    `
})
export class CategoriesComponent implements OnInit {
    constructor(
        private categoryService: CategoryService
    ) { }

    ngOnInit(): void {
        this.categoryService.getCategories().subscribe((data) => {
            console.log(data);
        }, err => {
            console.log(err);
        });
    }
}
