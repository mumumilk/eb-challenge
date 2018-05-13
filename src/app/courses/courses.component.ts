import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Course } from './shared/course.model';
import { Subscription } from 'rxjs/Subscription';
import { CourseService } from './shared/course.service';

@Component({
    selector: 'app-courses',
    template: `
        <app-course-header></app-course-header>
        <app-course-list [courses]="courses"></app-course-list>
    `
})
export class CoursesComponent implements OnInit, OnDestroy {
    courses: Course[];
    coursesSubs: Subscription;

    constructor(
        private courseService: CourseService
    ) { }

    ngOnInit(): void {
        this.coursesSubs = this.getCoursesSubscription();
    }

    ngOnDestroy(): void {
        if (this.coursesSubs) { this.coursesSubs.unsubscribe(); }
    }

    getCoursesSubscription(): Subscription {
        return this
            .courseService
            .getCourses()
            .subscribe((courses: Course[]) => {debugger
                this.courses = courses;
            });
    }
}
