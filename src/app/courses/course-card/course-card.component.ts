import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../shared/course.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
    @Input() course: Course;

    constructor(
        private sanitizer: DomSanitizer
    ) { }

    getImage(url: string) {
        return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
    }
}
