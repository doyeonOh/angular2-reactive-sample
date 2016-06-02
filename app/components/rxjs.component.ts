import { Component, OnInit } from 'angular2/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'my-rxjs',
  template: `
    <div>
      <section style="margin-top:20px;">
        <h2>Filter</h2>
        <div>
          <p>data : {{ data }}</p>
          <p>filter : value % 2 == 0 </p>
          <p>result : {{ resultFilter }}</p>
          <button (click)="onClickFilter()">run</button>
        </div>
      </section>
      <section style="margin-top:20px;">
        <h2>AutoComplete</h2>
        <div>
          <p>AutoComplete array: {{ autocompleteMock }}</p>
          <p>add sample: <input type="text" value="" #addInput> <button (click)="addAutocompleteMock(addInput.value)">Add</button> </p>
        </div>
        <div>
          <input type="text" id="autocomplete" value="" />
          <p>result : {{ resultAutocomplete }}</p>
        </div>
      </section>
    </div>
  `
})

export class RxjsComponent implements OnInit{
  data : Array<number> = [1,2,3,4,5,6,7];
  resultFilter : Array<number> = [];

  autocompleteMock : Array<string> = [
    "Hello", "Thanks", "Happy", "Good", "Sorry", "Angry", "Crazy", "Boomba", "Dinga"
  ]
  resultAutocomplete : any = "";


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
    var autocomplete = document.getElementById("autocomplete");

    Observable.fromEvent(autocomplete, "keyup")
      .map( e => { return e.target.value })
      .filter( value => { return value.length >= 2; })
      .distinctUntilChanged() // 오직 변경시 에만
      .switchMap( input => {  return this.doAsyncSearchMock(input); })
      .subscribe(
        result => { this.resultAutocomplete = result; }
      );
  }

  addAutocompleteMock(value){
    if(value.length >= 2)
      this.autocompleteMock.push(value);
  }

  // async 통신 mock
  doAsyncSearchMock(input){
    return Observable.fromArray(this.autocompleteMock)
      .filter(arrayValue => { return arrayValue.toLowerCase().match(input.toLowerCase()) != null }).toArray()
  }
}
