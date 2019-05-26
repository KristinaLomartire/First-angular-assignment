import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {
  state: number = 0;
  lightColors: string[] = ['class.red', 'class.yellow', 'class.green'];
  red = 'red';
  yellow = '';
  green = '';

  onLightChangingClick(){
    console.log('Nu tryckte jag på knappen...');

    this.red = '';
    this.yellow = '';
    this.green = '';
    if(this.state < 4){
      this.state++;
    }else{
      this.state = 0;
    }
    switch(this.state) {
      case 0:
        this.red = 'red';
        break;
      case 1:
        this.red = 'red';
        this.yellow = 'yellow';
        break;
      case 2:
        this.green = 'green';
        break;
      case 3:
        this.yellow = 'yellow';
        break;
      default:
        this.red = 'red';
        break;

    }
  }
  constructor() { }

  ngOnInit() {
  }

}
