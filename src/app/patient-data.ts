export class PatientData {
  public name: string;
  public score: number;
  public ge: number;
  public geLevel: string;
  public mtb: boolean;

  constructor(data: any) {
    this.name = data.name;
    this.score = data.score;
    this.ge = data.ge;
    this.geLevel = data.geLevel;
    this.mtb = data.ge;
  }
}
