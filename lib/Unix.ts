import dayjs from 'dayjs'

export default class {

  public toJsDate(seconds: number): Date {
    return new Date(seconds! * 1000)
  }

}