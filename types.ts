export interface ZonedOptions {

  /**
   * Allows you to specify a timezone for this instance, e.g. if you already store
   * a timezone for each user in a database. Must be in Area/Location form (e.g. America/New_York).
   * If not set, will be guessed by dayjs.
   */
  timezone?: string;

  /**
   * Date format which all non-specified conversion outputs will default to.
   */
  format?: number;

  /**
   * Boolean that controls whether the seconds units are JS, vs. default Unix. 
   */
  javascriptSeconds?: boolean;

}

export enum FormatString {

  /**
   * 8:02 PM
   */
  'h:mm A' = 1,

  /**
   * 8:02:18 PM
   */
  'h:mm:ss A',

  /**
   * 08/16/2018
   */
  'MM/DD/YY',

  /**
   * August 16, 2018
   */
  'MMMM D, YYYY',

  /**
   * August 16, 2018, 8:02 PM
   */
  'MMMM D, YYYY h:mm A',

  /**
   * Thursdau, August 16, 2018, 8:02 PM
   */
  'dddd, MMMM D, YYYY h:mm A',

  /**
   * 8/16/2018
   */
  'M/D/YYYY',

  /**
   * Aug 16, 2018
   */
  'MMM D YYYY',

  /**
   * Aug 16, 2018 8:02 PM
   */
  'MMM D YYYY h:mm A',

  /**
   * Thu, Aug 16, 2018 8:02 PM
   */
  'ddd, MMM D, YYYY h:mm A'

}