import { Component } from 'angular2/core';

import { RxjsComponent } from './components/rxjs.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <my-rxjs></my-rxjs>
    </div>
  `,
  directives: [
    RxjsComponent
  ]
})

export class AppComponent{

}
