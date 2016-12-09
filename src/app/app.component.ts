import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Garçon!!!!!!';
  radius = 100;
  x = null;
  y = null;
  onRadiusSliderChange(val) {
    this.radius = val;
  }
  onDrag(event, data: any) {
    console.log('MOUSE X: ', event.clientX);
    console.log('MOUSE Y: ', event.clientY);
    if(event.clientX > 0) { this.x = event.clientX; }
    if(event.clientY > 0) { this.y = event.clientY; }
    // event.preventDefault();
  }
}
