import { Dayjs } from 'dayjs'

export default class {

  private engine: Dayjs;

  constructor(engine: Dayjs) {
    this.engine = engine
  }
  
  public toJsDate(seconds: number): Date {
    return new Date(seconds! * 1000)
  }

}