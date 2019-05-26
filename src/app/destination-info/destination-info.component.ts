import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Destination } from '../destination';

@Component({
  selector: 'app-destination-info',
  templateUrl: './destination-info.component.html',
  styleUrls: ['./destination-info.component.css']
})
export class DestinationInfoComponent implements OnInit {

  @Input() city: string;
	@Input() info: string;
  @Output() onSelected = new EventEmitter<Destination>();
  @Input() cssClass: string;
  constructor() { }

  ngOnInit() {
  }
  handleClick(){
    console.log('handleClick: City info');
    this.onSelected.emit({
      city: this.city,
      info: this.info
    });
  }


}
