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
      this.updateStyleString(0);
    });
  }

  updateStyleString(idx: number) {
    var style_str: string = "";
    for(var rule in this.tables[idx].attributes.style) {
      if(rule.toString() === 'transform') {
        // style_str += "transform: ";
        // for(var trule in this.tables[idx].attributes.style[rule]) {
        //   style_str += trule.toString() + "( ";
        //   if(typeof this.tables[idx].attributes.style[rule][trule] !== 'Array') {
        //     style_str += this.tables[idx].attributes.style[rule][trule].toString();
        //   } else {
        //     style_str += this.tables[idx].attributes.style[rule][trule].join(', ');
        //   }
        //   style_str += " ), ";
        // }
      } else {
        style_str += rule.toString() + ": ";
        style_str += this.tables[idx].attributes.style[rule].toString();
      }
      style_str += "; ";
    }
    console.log(style_str);
    this.tables[idx].attributes.style_str = style_str;
  }

  mouseUpTable(event) {
    this.table_moving = null;
  }

  mouseMoveTable(event, svgele) {
    if(this.table_moving !== null && this.tables !== null) {
      var type = this.table_moving.type;
      var idx = this.table_moving.idx;

      var svgele_rect = svgele.getBoundingClientRect();
      var x =  (event.clientX - svgele_rect.left) / svgele_rect.width * 1920;
      var y =  (event.clientY - svgele_rect.top) / svgele_rect.height * 1000;

      switch(type) {
        case "circle":
          this.tables[idx].attributes.cx = x;
          this.tables[idx].attributes.cy = y;
          break;
        case "square":
          this.tables[idx].attributes.x = x - this.tables[idx].attributes.width/2;
          this.tables[idx].attributes.y = y - this.tables[idx].attributes.height/2;
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
