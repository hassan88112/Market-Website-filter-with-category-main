import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import "rxjs-compat/add/observable/interval";




@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit{
  public countNum: any;

  name:string="hassan";

  mydate =new Date();


  constructor() {
  }

  /*
  ngOnInit(): void {
    const counter =Observable.interval(1000);
    counter.subscribe(
      (value :number) => {
        this.countNum=value;
      }
    );

  }*/

  getCount(){

  }

  ngOnInit(): void {

    const counter =Observable.interval(3000);

    counter.subscribe(
      (value:number) => {
        this.countNum=value;
      }
    )
  }

}
