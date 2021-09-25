// Aeroflot calculations

export class Aeroflot {

    constructor(private distance: number | undefined, private age: number | undefined, private weight: number | undefined) {
    this.distance = distance
    this.age = age
    this.weight = weight
  }

  get calculate() {
    return {
      economy: this.economy(),
      advanced: this.advanced(),
      lux: this.lux()
    }
  }

  economy () {

    const PRICE_PER_KILOMETER = 4;
    const MAX_WEIGHT = 20;
    const MAX_FREE_WEIGHT = 5;
    const PRICE_FOR_WEIGHT = 4000;

    if (this.distance !== undefined && this.weight !== undefined && this.weight < MAX_WEIGHT && this.age !== undefined) {

      const result = (this.distance * PRICE_PER_KILOMETER) + (this.weight < MAX_FREE_WEIGHT ? 0 : PRICE_FOR_WEIGHT)

      return Number(result.toFixed(2))

    } else {
      return undefined;
    }
  }

  advanced () {

    const PRICE_PER_KILOMETER = 8;
    const MAX_WEIGHT = 50;
    const MAX_FREE_WEIGHT = 20;
    const PRICE_FOR_WEIGHT = 5000;
    const AGE_FOR_DISCOUNT = 7;
    const DISCOUNT = 0.3;

    if (this.distance !== undefined && this.weight !== undefined && this.weight < MAX_WEIGHT && this.age !== undefined) {

      const result = (this.distance * PRICE_PER_KILOMETER) * (this.age < AGE_FOR_DISCOUNT ? DISCOUNT : 1) + (this.weight < MAX_FREE_WEIGHT ? 0 : PRICE_FOR_WEIGHT)

      return Number(result.toFixed(2))

    } else {
      return undefined;
    }
  }
  lux () {

    const PRICE_PER_KILOMETER = 15;
    const MAX_WEIGHT = 50;
    const AGE_FOR_DISCOUNT = 16;
    const DISCOUNT = 0.3;

    if (this.distance !== undefined && this.weight !== undefined && this.weight < MAX_WEIGHT && this.age !== undefined) {

      const result = (this.distance * PRICE_PER_KILOMETER) * (this.age < AGE_FOR_DISCOUNT ? DISCOUNT : 1)

      return Number(result.toFixed(2))

    } else {
      return undefined;
    }
  }
}

//Rzhd calculations


export class Rzhd {

  constructor(private distance: number | undefined, private age: number | undefined, private weight: number | undefined) {
    this.distance = distance
    this.age = age
    this.weight = weight
  }

  get calculate() {
    return {
      economy: this.economy(),
      advanced: this.advanced(),
      lux: this.lux()
    }
  }

  private economy () {

  const PRICE_PER_KILOMETER = 0.5;
  const MAX_WEIGHT = 50;
  const MAX_FREE_WEIGHT = 15;
  const PRICE_FOR_WEIGHT = 50; //per kilogram
  const AGE_FOR_DISCOUNT = 5;
  const DISCOUNT = 0.5;

  if (this.distance !== undefined && this.weight !== undefined && this.weight < MAX_WEIGHT && this.age !== undefined) {

    const result = (this.distance * PRICE_PER_KILOMETER) * (this.age < AGE_FOR_DISCOUNT ? DISCOUNT : 1) + (this.weight < MAX_FREE_WEIGHT ? 0 : PRICE_FOR_WEIGHT * this.weight)

    return Number(result.toFixed(2))

  } else {
    return undefined;
  }
  }

  private advanced () {

  const PRICE_PER_KILOMETER = 2;
  const MAX_WEIGHT = 60;
  const MAX_FREE_WEIGHT = 20;
  const PRICE_FOR_WEIGHT = 50; //per kilogram
  const AGE_FOR_DISCOUNT = 8;
  const DISCOUNT = 0.3;

  if (this.distance !== undefined && this.weight !== undefined && this.weight < MAX_WEIGHT && this.age !== undefined) {

    const result = (this.distance * PRICE_PER_KILOMETER) * (this.age < AGE_FOR_DISCOUNT ? DISCOUNT : 1) +
      (this.weight < MAX_FREE_WEIGHT ? 0 : PRICE_FOR_WEIGHT * this.weight)

    return Number(result.toFixed(2));

  } else {
    return undefined;
  }
  }

  private lux () {

  const PRICE_PER_KILOMETER = 4;
  const MAX_WEIGHT = 60;
  const AGE_FOR_DISCOUNT = 16;
  const DISCOUNT = 0.2;

  if (this.distance !== undefined && this.weight !== undefined && this.weight < MAX_WEIGHT && this.age !== undefined) {

    const result = (this.distance * PRICE_PER_KILOMETER) * (this.age < AGE_FOR_DISCOUNT ? DISCOUNT : 1)

    return Number(result.toFixed(2))

  } else {
    return undefined;
  }
}

}
