import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';

import {AppModule} from './app.module';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Duc!</h1><courses></courses><md-toolbar>Duc
    Dao</md-toolbar>`,
    directives: [CoursesComponent]
})

export class AppComponent { }
