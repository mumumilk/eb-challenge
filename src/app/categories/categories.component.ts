import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from './shared/category.service';
import { Subscription } from 'rxjs/Subscription';
import { Category } from './shared/category.model';

@Component({
    selector: 'app-categories',
    template: `
        <mat-drawer-container [style.width.vw]="100" [style.height.vh]="100">
            <mat-drawer mode="side" opened="true" [style.min-width.px]="240" class="mat-elevation-z1" [style.background]="'#19212b'">
                <mat-toolbar fxLayoutAlign="center center" [style.background]="'#404854'" [style.color]="'white'">Categorias</mat-toolbar>
                <app-category-list [categories]="categories"></app-category-list>
            </mat-drawer>
            <mat-drawer-content>
                <router-outlet></router-outlet>
            </mat-drawer-content>
        </mat-drawer-container>
    `
})
export class CategoriesComponent implements OnInit, OnDestroy {
    categories: Category[];
    categoriesSubs: Subscription;

    constructor(
        private categoryService: CategoryService
    ) { }

    ngOnInit(): void {
        this.categoriesSubs = this.getCategoriesSubscription();
    }

    ngOnDestroy(): void {
        if (this.categoriesSubs) { this.categoriesSubs.unsubscribe(); }
    }

    getCategoriesSubscription(): Subscription {
        return this
            .categoryService
            .getCategories()
            .subscribe((categories: Category[]) => {
                this.categories = categories;
            });
    }
}
