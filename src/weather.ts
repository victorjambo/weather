import http from './utils/http'
import { IHttpResponse, IErrorNotFound } from './utils/types'


class Weather {
  locations: string[]

  constructor(locations: string[]) {
    this.locations = locations
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
      return response
    } catch (e) {
      throw e.message
    }
  }
}

export default Weather
