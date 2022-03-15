import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import { ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterViewInit {

  text:any = {
    data:""
  };

  constructor() { }

  @ViewChild('input', {static: true}) input: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'input')
          .subscribe(res => {
              this.text = res;
              console.log(res);
          });
  }
}

