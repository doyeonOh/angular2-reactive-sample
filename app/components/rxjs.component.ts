import { Component, OnInit } from 'angular2/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'my-rxjs',
  template: `
    <h3> This is my rxjs </h3>
    <div >
      <div>
        <p>data : {{ data }}</p>
        <p>filter : value % 2 == 0 </p>
        <p>result : {{ resultFilter }}</p>
        <button (click)="onClickFilter()">run</button>
      </div>
    </div>
  `
})

export class RxjsComponent implements OnInit{
  data : Array<number> = [1,2,3,4,5,6,7];
  resultFilter : Array<number> = [];


  onClickFilter(){
    var filterObservable = Observable.fromArray(this.data)
      .filter(
        value => { return value % 2 === 0 })
      .toArray()
      .subscribe(
        result => { this.resultFilter = result;}
      );
  }


  ngOnInit(){

  }
}
