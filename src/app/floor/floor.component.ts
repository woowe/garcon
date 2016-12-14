import { Component, OnInit } from '@angular/core';

import { FloorsService } from '../services/floors/floors.service';
import { IFloor } from '../interfaces/floor.interface';

@Component({
  selector: 'floor-view',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css'],
  providers: [FloorsService]
})
export class FloorView implements OnInit {
  floor_idx = 0;
  floor_data: IFloor;
  tables;
  table_moving = null;
  constructor(private _floorsService: FloorsService) { }
  ngOnInit() {
    this.getFloor();
  }

  getFloor() {
    this._floorsService.getFloor(this.floor_idx).then((floor: IFloor) => {
      this.tables = floor.tables;
    });
  }

  mouseUpTable(event) {
    this.table_moving = null;
  }

  mouseMoveTable(event, svgele) {
    if(this.table_moving !== null && this.tables !== null) {
      var type = this.table_moving.type;
      var idx = this.table_moving.idx;

      var svgele_rect = svgele.getBoundingClientRect();
      var x = svgele_rect.left - event.clientX;
      var y = svgele_rect.top - event.clientY;

      console.log('X: ', x, " Y: ", y);

      switch(type) {
        case "circle":
          this.tables[idx].attributes.cx = x * (1);
          this.tables[idx].attributes.cy = y * (1);
          break;
        case "square":
          this.tables[idx].attributes.x = x * (1);
          this.tables[idx].attributes.y = y * (1);
          break;
        default:
          break;
      }
    }
  }

  mouseDownTable(event, table_type, idx)  {
    console.log('Moving: ', table_type, ' idx: ', idx);
    this.table_moving = {
      type: table_type,
      idx: idx
    };
  }
}
