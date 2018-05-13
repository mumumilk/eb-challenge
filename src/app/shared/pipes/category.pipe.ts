import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../courses/shared/course.model';

@Pipe({name: 'category'})
export class CategoryPipe implements PipeTransform {
    transform(courses: Course[], categoryId: string): any {
        if (courses.length) {
            return courses.filter(value => value.category.category_id === categoryId);
        }  else {
            return courses;
        }
    }
}
