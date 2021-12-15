import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import Unix from '../lib/Unix'

import {
  ZonerOptions,
} from '../types'


dayjs.extend(utc)
dayjs.extend(timezone)


export default class {

  private engine: Dayjs;
  public options?: ZonerOptions;
  public unix: Unix;

  constructor(options?: ZonerOptions) {
    this.engine = dayjs()
    this.options = options
    this.unix = new Unix(this.engine)
    console.log(this.options)
  }

}