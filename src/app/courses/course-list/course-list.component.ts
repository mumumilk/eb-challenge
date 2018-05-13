import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Course } from '../shared/course.model';
import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
    @Input() courses: Course[];

    isMobile = false;
    mediaSubs: Subscription;

    constructor(
        private media: ObservableMedia
    ) { }

    ngOnInit(): void {
        this.mediaSubs = this.getMediaSubscription();
    }

    ngOnDestroy(): void {
        if (this.mediaSubs) { this.mediaSubs.unsubscribe(); }
    }

    getMediaSubscription(): Subscription {
        return this.media.subscribe((change: MediaChange) => {
            this.isMobile = change.mqAlias === 'xs';
        });
    }
}
