/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import http from './utils/http'
import { IHttpResponse, IErrorNotFound, IWeather } from './utils/types'


class Weather {
  locations: string[]

  constructor(locations: string[]) {
    this.locations = locations
  }

  formatWeatherDataFromResponse = (response: Array<any>) => {
    return response.map((res): IWeather|IErrorNotFound => {
      if (res.errMessage) {
        return {
          location: res.location,
          errMessage: res.errMessage,
        }
      }

      const { name, clouds: {all}, timezone, weather, wind: { speed }, main: { humidity } } = res

      return {
        humidity,
        timezone,
        clouds: all,
        location: name,
        windSpeed: speed,
        weather: weather[0].description,
      }
    })
  }

  requestWeatherInfo = async (location: string): Promise<IHttpResponse|IErrorNotFound> => {
    try {
      const { data } = await http.get(`?q=${location}`)
      return data
    } catch (e) {
      return {
        location,
        errMessage: 'city not found',
      }
    }
  }

  getWeatherInfo = async (): Promise<Array<IHttpResponse|IErrorNotFound>> => {
    try {
      const requestMultipleLocations = this.locations.map(loc => this.requestWeatherInfo(loc))
      const response = await http.all(requestMultipleLocations)
      return this.formatWeatherDataFromResponse(response)
    } catch (e) {
      throw e.message
    }
  }
}

export default Weather
