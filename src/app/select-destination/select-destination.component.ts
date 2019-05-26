import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Destination } from '../destination';

@Component({
  selector: 'app-select-destination',
  templateUrl: './select-destination.component.html',
  styleUrls: ['./select-destination.component.css']
})
export class SelectDestinationComponent implements OnInit {
  destinations: Destination[] = [
    {
      city: 'Piteå',
      info: 'Sveriges "Franska riviera" sol, bad och pina colada',
    },
    {
      city: 'Gällivare',
      info: 'En suverän stad för dig som gillar utförsåkning, mycket snö och skog',
    },
    {
      city: 'Kiruna',
      info: 'För dig som gillar vitt landskap och norrsken, största tätorten i Lappland',
    },
    {
      city: 'Nikkaluokta',
      info: 'Nikkaluokta är känt för rekordmånga köldrekord samt att det är en jätte startpunkt om man vill bestiga kebenekajse',
    },
    {
      city: 'Fjällen',
      info: 'Pilsner korv is da shit!',
    },
  ];
  chosenIndex: number;
  selectedDestination: Destination = null;
  @Output() onSelected = new EventEmitter<Destination>();

  constructor() { }

  ngOnInit() {
  }

  selectedCity(dest: Destination){
    this.selectedDestination = dest;
    this.onSelected.emit(dest);
  }

  resetInfo():any{
    this.selectedDestination = null;
    this.chosenIndex = null;
  }
  indexOfChoise(index: number){
    this.chosenIndex = index;
  }

}
