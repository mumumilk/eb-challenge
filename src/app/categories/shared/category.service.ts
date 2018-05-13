import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category } from './category.model';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class CategoryService {
    constructor(
        private _http: HttpClient
    ) {}

    getCategories(): Observable<Category[]> {
        const url = environment.api_url + '/admin/categories';
        const params = new HttpParams().append('auth_token', environment.api_token);

        return this
            ._http
            .get<Category[]>(url, {params: params});
    }
}
