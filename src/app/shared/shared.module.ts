import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryPipe } from './pipes/category.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
    declarations: [ CategoryPipe, TruncatePipe ],
    imports: [ MaterialModule, FlexLayoutModule ],
    exports: [ MaterialModule, FlexLayoutModule, CategoryPipe, TruncatePipe ],
    providers: [],
})
export class SharedModule {}
