export default class {

  javascriptSeconds: boolean
  seconds?: number

  constructor(javascriptSeconds?: boolean) { 
    this.javascriptSeconds = javascriptSeconds ? javascriptSeconds : false
  }

  private set(seconds: number): number {
    return this.seconds = this.javascriptSeconds ? seconds * 1000 : seconds
  }

  public toJsDate(seconds: number): Date {
    this.seconds = this.set(seconds)
    return new Date(this.seconds! * 1000)
  }

  public fromJsDate(date: Date): number {
    return Math.round(date.getTime() / 1000)
  }

}