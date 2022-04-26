import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  
  dollarValue: number = 60000;

  bitcoinValue: any = 1;

  dollarResult : number = this.dollarValue;

  constructor() { }

  ngOnInit(): void {
  }

  
  calculateUSDtoBitcoin(bitcoin : any):void {
    this.dollarResult = bitcoin.target.value * this.dollarValue;
    console.log(this.dollarResult);
  }

  setBack(){
    this.dollarResult = this.dollarValue;
    this.bitcoinValue = '1';
  }

}
