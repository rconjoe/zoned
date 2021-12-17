import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

import {
  FormatString
} from '../types'

dayjs.extend(utc)
dayjs.extend(timezone)

export default class {

  private format: string;
  private timezone: string;

  constructor(formatOption?: number, timezone?: string) {
    const formatOptionNumber: number = formatOption ? formatOption : 6
    this.format = FormatString[formatOptionNumber]
    this.timezone = timezone ? timezone : dayjs.tz.guess()
  }

  public date(date: Date): string {
    console.log(`\n${this.format}:${this.timezone}`)
    return dayjs(date).tz(this.timezone).format(this.format)
  }

}