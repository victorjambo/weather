/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCurrentDateTime } from './time'

export const humanizeResponse = (response: Array<any>): any => {
  return response.forEach(item => {
    if (item.errMessage) {
      console.log('\x1b[31m%s\x1b[0m', `${item.location}\n ${item.errMessage}\n`)
    } else {
      const { humidity, timezone, clouds, location, windSpeed, weather } = item
      const time = getCurrentDateTime(timezone)

      console.log('\x1b[32m%s\x1b[0m', `${location}\n Weather:\t${weather}\n Clouds:\t${clouds}%\n Humidity:\t${humidity}%\n Wind Speed:\t${windSpeed}m/s\n Time:\t${time}\n`)
    }
  })
}
