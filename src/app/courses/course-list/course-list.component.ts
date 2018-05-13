import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../shared/course.model';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
    @Input() courses: Course[];

    constructor() { }

    ngOnInit(): void { }
}
