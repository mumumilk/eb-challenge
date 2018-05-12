import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesHeaderComponent } from './courses-header/courses-header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ CoursesComponent, CoursesHeaderComponent ],
    imports: [ CommonModule, CoursesRoutingModule, SharedModule ],
    exports: [ CoursesComponent ],
    providers: [],
})
export class CoursesModule {}
