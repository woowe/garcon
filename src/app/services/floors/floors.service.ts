import { Injectable } from '@angular/core';

import {IFloor, ITable} from '../../interfaces/floor.interface';

var const_floors_data: IFloor[] = [ { tables: [] } ];

var floor_types: ITable[] = [ {
  type: "square",
  attributes: {
    width: 100,
    height: 100,
    x: 0,
    y: 0,
    style: {
      fill: "rgba(0, 0, 0, 0.5)",
      transition: "all 0.2 ease",
      transform: {
        rotateZ: 0,
        scale: 1.0,
      }
    }
  }
},
{
  type: "circle",
  attributes: {
    r: 50,
    cx: 0,
    cy: 0,
    style: {
      fill: "rgba(0, 0, 0, 0.5)",
      transition: "all 0.2 ease",
      transform: {
        rotateZ: 0,
        scale: 1.0,
      }
    }
  }
} ];

// generate some dummy data
var x = 0;
for(var i = 0; i < 10; ++i) {
  var type = Math.round(Math.random());
  var floor = Object.assign({},floor_types[type]);
  floor.attributes = null;
  floor.attributes = Object.assign({}, floor_types[type].attributes);
  switch(floor.type) {
    case "circle":
      floor.attributes.cx = 100 * i + 65;
      floor.attributes.cy = 65;
      break;
    case "square":
      floor.attributes.x = 100 * i + 15;
      floor.attributes.y = 15;
      break;
  }
  const_floors_data[0].tables.push(floor);
  // floor = null;
}

@Injectable()
export class FloorsService {
  floors_data = const_floors_data;
  constructor() {
    console.log(this.floors_data);
  }

  getFloor(idx) {
    return Promise.resolve(this.floors_data[idx]);
  }

  styleToString(style) {
    var style_str = "";
    return style_str;
  }
}
