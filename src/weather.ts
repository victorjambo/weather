import http from './utils/http'
import { IHttpResponse, IErrorNotFound } from './utils/types'


class Weather {
  locations: string[]

  constructor(locations: string[]) {
    this.locations = locations
  }

  getWeatherInfo = async (): Promise<IHttpResponse|IErrorNotFound> => {
    try {
      const { data } = await http.get(`?q=${this.locations[0]}`)
      return data
    } catch (e) {
      return {
        location: this.locations[0],
        errMessage: 'city not found',
      }
    }
  }
}

export default Weather
