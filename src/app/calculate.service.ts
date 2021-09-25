import { Injectable } from '@angular/core';

import {Aeroflot, Rzhd} from "./calculations/calculations"

interface AggregatorPrice {
  economy: number | undefined
  advanced: number | undefined
  lux: number | undefined
  }

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  distance: number | undefined = undefined;
  age: number | undefined = undefined;
  weight: number | undefined = undefined;

  aeroflotPrice: AggregatorPrice = {
    economy: undefined,
    advanced: undefined,
    lux: undefined
  }

  rzhdPrice: AggregatorPrice = {
    economy: undefined,
    advanced: undefined,
    lux: undefined
  }



  calculate() {
    let aeroflotCalc = new Aeroflot(this.distance, this.age, this.weight);
    let rzhdCalc = new Rzhd(this.distance, this.age, this.weight);

    this.aeroflotPrice = aeroflotCalc.calculate

    this.rzhdPrice = rzhdCalc.calculate
  }

}
