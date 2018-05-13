import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-course-header',
    template: `
        <div fxLayout="row wrap" fxLayoutAlign="start center" class="background">
            <div class="overlay"></div>
            <h1>Informativo</h1>
        </div>
    `,
    styleUrls: ['course-header.component.css']
})
export class CourseHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
