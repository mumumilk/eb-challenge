import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CategoryService } from './shared/category.service';
import { Subscription } from 'rxjs/Subscription';
import { Category } from './shared/category.model';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { MatDrawer } from '@angular/material';

@Component({
    selector: 'app-categories',
    templateUrl: 'categories.component.html',
    styleUrls: ['categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {
    categories: Category[];
    categoriesSubs: Subscription;

    isMobile = false;

    mediaSubs: Subscription;

    constructor(
        private categoryService: CategoryService,
        private media: ObservableMedia
    ) { }

    ngOnInit(): void {
        this.categoriesSubs = this.getCategoriesSubscription();
        this.mediaSubs = this.getMediaSubscription();
    }

    ngOnDestroy(): void {
        if (this.categoriesSubs) { this.categoriesSubs.unsubscribe(); }
        if (this.mediaSubs) { this.mediaSubs.unsubscribe(); }
    }

    getCategoriesSubscription(): Subscription {
        return this
            .categoryService
            .getCategories()
            .subscribe((categories: Category[]) => {
                this.categories = categories;
            });
    }

    getMediaSubscription(): Subscription {
        return this.media.subscribe((change: MediaChange) => {
            this.isMobile = change.mqAlias === 'xs';
        });
    }
}
