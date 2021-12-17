import Unix from './Unix'
import Format from './Format'
import dayjs, { Dayjs } from 'dayjs'

import {
  ZonedOptions,
} from '../types'

/**
 * @name Zoned
 * @description Main controller class. This class is instantiated by the user in their app.
 * @property options <ZonedOptions> App options. See ZonedOptions interface.
 * @property unix <Unix> An instance of this app's Unix class, instantiated in the Zoned constructor.
 * @property format <Format> An instance of this app's Format class, instantiated in the Zoned constructor.
 *
 * @export
 * @class
 */
export default class {

  private options?: ZonedOptions;
  public unix: Unix;
  public format: Format;

  constructor(options?: ZonedOptions) {
    this.options = options
    this.format = new Format(options?.format, options?.timezone)
    this.unix = new Unix(options?.javascriptSeconds)
  }


  public engine(input: any): Dayjs {
    return dayjs(input).tz(this.options?.timezone)
  }


  public formatDate(date?: Date): string {
    if (!date) date = new Date()
    return this.format.date(date)
  }

  public formatUnix(seconds?: number): string {
    if (!seconds) seconds = this.unix.fromJsDate(new Date())
    return this.format.date(this.unix.toJsDate(seconds))
  }

}