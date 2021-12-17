import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import Unix from './Unix'
import Format from './Format'

import {
  ZonedOptions,
} from '../types'


dayjs.extend(utc)
dayjs.extend(timezone)


export default class {

  public options?: ZonedOptions;
  public unix: Unix;
  public format: Format;

  constructor(options?: ZonedOptions) {
    this.options = options
    this.format = new Format(options?.format)
    this.unix = new Unix()
  }


}