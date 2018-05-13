import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Course } from './shared/course.model';
import { Subscription } from 'rxjs/Subscription';
import { CourseService } from './shared/course.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../categories/shared/category.service';
import { Category } from '../categories/shared/category.model';

@Component({
    selector: 'app-courses',
    template: `
        <app-course-header [title]="category.title"></app-course-header>
        <app-course-list [courses]="courses | category:category.category_id"></app-course-list>
    `
})
export class CoursesComponent implements OnInit, OnDestroy {
    courses: Course[];
    coursesSubs: Subscription;

    category: Category;
    categoryChangedSubs: Subscription;

    constructor(
        private courseService: CourseService,
        private categoryService: CategoryService
    ) { }

    ngOnInit(): void {
        this.coursesSubs = this.getCoursesSubscription();
        this.categoryChangedSubs = this.getCategoryChangedSubscription();
        this.category = this.categoryService.category;
    }

    ngOnDestroy(): void {
        if (this.coursesSubs) { this.coursesSubs.unsubscribe(); }
        if (this.categoryChangedSubs) { this.categoryChangedSubs.unsubscribe(); }
    }

    getCoursesSubscription(): Subscription {
        return this
            .courseService
            .getCourses()
            .subscribe((courses: Course[]) => {
                this.courses = courses;
            });
    }

    getCategoryChangedSubscription(): Subscription {
        return this
            .categoryService
            .categoryChanged
            .subscribe((category) => {
                this.category = category;
            });
    }
}
