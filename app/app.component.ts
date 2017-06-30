import {Component} from 'angular2/core';
import {CoursesComponent from './courses.component';
import {MdTabsModule} from '@angular/material';

@NgModule({
   imports: MdTabsModule.forRoot()
)}

@Component({
    selector: 'my-app',
    template: '<h1>Hello Duc!</h1><courses></courses>',
    directives: [CoursesComponent]
})
export class AppComponent { }
