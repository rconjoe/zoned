import dayjs from 'dayjs'
import {
  Format
} from '../types'

export default class {

  public format: string;

  constructor(formatOption?: number) {
    const formatOptionNumber = formatOption ? formatOption : 5
    this.format = Format[formatOptionNumber]
  }

  // public fromUnix(seconds: number): string {
  //   const js = new Date(seconds * 1000)
  // }

}