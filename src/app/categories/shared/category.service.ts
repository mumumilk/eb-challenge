import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category } from './category.model';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class CategoryService {
    constructor(
        private _http: HttpClient
    ) {}

    private _category: Category;
    categoryChanged: EventEmitter<Category> = new EventEmitter<Category>();

    set category(category: Category) {
        this._category = category;
        this.categoryChanged.emit(this._category);
    }
    get category() {
        return this._category;
    }

    getCategories(): Observable<Category[]> {
        const url = environment.api_url + '/admin/categories';
        const params = new HttpParams().append('auth_token', environment.api_token);

        return this
            ._http
            .get<Category[]>(url, {params: params});
    }
}
