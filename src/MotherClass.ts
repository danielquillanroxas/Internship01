export default class BaseChart {
  protected option: object;

  constructor() {
    this.option = {};
  }

  public getOption(): object {
    return this.option;
  }
}
