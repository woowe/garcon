import { Injectable } from '@angular/core';

import {IFloor, ITable} from '../../interfaces/floor.interface';

var const_floors_data: IFloor[] = [
  { tables: [
    {
      type: "circle",
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
] } ];

@Injectable()
export class FloorsService {
  floors_data = const_floors_data;
  constructor() { }

  getFloor(idx) {
    return Promise.resolve(this.floors_data[idx]);
  }

  styleToString(style) {
    var style_str = "";
    return style_str;
  }
}
