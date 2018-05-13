import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CategoryService } from '../../categories/shared/category.service';
import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
    selector: 'app-course-header',
    template: `
        <div fxLayout="row wrap" fxLayoutAlign="start center" class="background">
            <div class="overlay"></div>
            <h1 [style.font-size.em]="isMobile ? 3 : 4">{{title}}</h1>
        </div>
    `,
    styleUrls: ['course-header.component.css']
})
export class CourseHeaderComponent implements OnInit, OnDestroy {
    @Input() title = '';

    isMobile = false;
    mediaSubs: Subscription;

    constructor(
        private media: ObservableMedia
    ) { }

    ngOnInit() {
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
