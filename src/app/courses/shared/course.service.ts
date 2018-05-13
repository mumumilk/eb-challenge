import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Course } from './course.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class CourseService {
    constructor(
        private _http: HttpClient
    ) {}

    getCourses(): Observable<Course[]> {
        const url = environment.api_url + '/admin/courses';
        const params = new HttpParams().append('auth_token', environment.api_token);

        return this
            ._http
            .get<Course[]>(url, {params: params});
    }
}
