import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
    declarations: [],
    imports: [ CommonModule, MaterialModule ],
    exports: [ CommonModule, MaterialModule ],
    providers: [],
})
export class SharedModule {}
