import { Component } from 'angular2/core';

import { RxjsComponent } from './components/rxjs.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>angular2-reactive-sample</h1>
    Thanks
    <my-rxjs></my-rxjs>
  `,
  directives: [
    RxjsComponent
  ]
})

export class AppComponent{

}
