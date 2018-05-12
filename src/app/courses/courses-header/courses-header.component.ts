import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-courses-header',
    template: `
        <div fxLayout="row wrap" fxLayoutAlign="start center" class="background">
            <div class="overlay"></div>
            <h1>Informativo</h1>
        </div>
    `,
    styleUrls: ['courses-header.component.css']
})
export class CoursesHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
