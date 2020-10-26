import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year : '2000'
  };


  // tslint:disable-next-line:typedef
  onNameChange(value: string){
    this.name = value;
  }

  // tslint:disable-next-line:typedef
  onDateChange(value: string){
    this.date = value;
  }

  // tslint:disable-next-line:typedef
  onAmountChange(value: string){
    this.amount = parseFloat(value);
  }
  onHeightChange(value: string){
    this.height = parseFloat(value);
  }

  onMilesChange(value: string){
    this.miles = parseFloat(value);
  }
}
