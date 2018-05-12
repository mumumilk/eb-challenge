import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [],
    imports: [ CommonModule, MaterialModule, FlexLayoutModule ],
    exports: [ CommonModule, MaterialModule, FlexLayoutModule ],
    providers: [],
})
export class SharedModule {}
