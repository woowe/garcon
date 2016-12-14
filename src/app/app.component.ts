import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Garçon!!!!!!';
  radius = 100;
  x = null;
  y = null;
  mouseIsDown = false;
  floor_scale = 0.5;
  onRadiusSliderChange(val) {
    this.radius = val;
  }
  mouseDown(event) {
    this.mouseIsDown = true;
    // console.log('MOUSE DOWN: ', this.mouseIsDown);
    // console.log('MOUSE X: ', event.clientX);
    // console.log('MOUSE Y: ', event.clientY);
    if(event.clientX > 0) { this.x = event.clientX; }
    if(event.clientY > 0) { this.y = event.clientY; }
  }

  scaleFloor(event) {
    if (event.deltaY && this.floor_scale >= 0) {
      this.floor_scale += 0.1 * Math.sign(event.deltaY);
      if(this.floor_scale < 0) {
        this.floor_scale = 0;
      }
      // console.log('MOUSE WHEEL: ', this.floor_scale);
    }
    event.preventDefault();
  }

  mouseUp(event) {
    this.mouseIsDown = false;
    // console.log('MOUSE UP: ', this.mouseIsDown);
  }
}
