import { Component, Input } from '@angular/core';
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
    @Input() categories: Category[];

    constructor(
        private categoryService: CategoryService
    ) { }

    setCategory(category) {
        this.categoryService.category = category;
    }
}
