import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.css']
})
export class FlexLayoutComponent implements OnInit {

  public direction = 'row';
  public mainAxis = 'space-around';
  public crossAxis = 'center';

  constructor() { }

  ngOnInit() {
  }

  layoutAlign() {
    return `${this.mainAxis} ${this.crossAxis}`;
  }
}
