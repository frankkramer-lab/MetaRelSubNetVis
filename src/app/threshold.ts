export class Threshold {

  public selected: number;
  public threshold: number;
  public max: number;

  constructor(data: any, multiplier: number) {
    this.threshold = data.threshold;
    this.max = data.max;
    this.selected = data.threshold * multiplier;
  }

  // constructor(public threshold: number,
  //             public max: number) { }

}
