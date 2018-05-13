import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseHeaderComponent } from './course-header/course-header.component';
import { SharedModule } from '../shared/shared.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseService } from './shared/course.service';

@NgModule({
    declarations: [ CoursesComponent, CourseHeaderComponent, CourseListComponent, CourseCardComponent],
    imports: [ CommonModule, CoursesRoutingModule, SharedModule],
    exports: [ CoursesComponent, CourseCardComponent ],
    providers: [ CourseService ],
})
export class CoursesModule {}
