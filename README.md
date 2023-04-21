# Zoned
*Easily generate timezone-correct strings from UTC timestamps.*

**NOTE:** Don't use this. It was never made for production. I used it to get a feel for TS Enums in practice. The concept has some nice utility, so I might rewrite this someday.
---

## Installation
```js
npm i zoned
```

-----
## Usage
Instantiate as a class with options. All parameters are optional and have sane defaults:

**Timezone:** You can supply a timezone if you store them for your users. Otherwise, dayjs will guess the timezone. It is generally very good at this, but obviously requires this library be used in a clientside app, otherwise you will be using the timezone of your server (unless specified).

**Format:** Defaults to format 6, `'August 16, 2018, 8:02 PM'`. Lets you pass a number instead of having to correctly input formatting strings. Available formats:
| Options Value | Format                            |
|---------------|-----------------------------------|
| 1             | 8:02 PM                           |
| 2             | 8:02:18 PM                        |
| 3             | 08/16/2018                        |
| 4             | August 16, 2018                   |
| 5             | August 16, 2018 8:02 PM           |
| 6             | Thursday, August 16, 2018 8:02 PM |
| 7             | 8/16/2018                         |
| 8             | Aug 16, 2018                      |
| 9             | Aug 16, 2018 8:02 PM              |
| 10            | Thu, Aug 16, 2018 8:02 PM         |

**javascriptSeconds** Setting this to true divides all values passed to Unix seconds functions / 1000. All values returned from Unix seconds functions are still standard Unix seconds and must be multiplied to create new Date(). 
```js
const { Zoned } = require('zoned')

const zoned = new Zoned({ timezone: 'America/Los_Angeles', format: 10 })

const formattedLocalDate: string = zoned.formatUnix(1639769170) // Friday, December 17, 2021 11:26 AM
```
