import { Component, OnInit } from '@angular/core';

var floor_data = [
  {
    type: "circle",
    svgelement: "cirlce",
    attributes: {
      r: 50,
      cx: 65,
      cy: 65,
      style: {
        transform: {
          rotateZ: 0,
          scale: 1.0,
        }
      }
    }
  },
  {
    type: "square",
    svgelement: "rect",
    attributes: {
      width: 100,
      height: 100,
      x: 130,
      y: 15,
      style: {
        transform: {
          rotateZ: 0,
          scale: 1.0,
        }
      }
    }
  },
];


@Component({
  selector: 'floor-view',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorView implements OnInit {
  data = floor_data;
  test = '<circle cx="65" cy="65" r="50" stroke="black" fill="white"/>';
  constructor() { }

  ngOnInit() {
  }

}
