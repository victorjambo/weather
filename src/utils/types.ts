export interface IWeather {
  main: string,
  description: string,
}

export interface IErrorNotFound {
  location?: string,
  errMessage?: string,
}

export interface IHttpResponse {
  weather: IWeather[],
  main: {
    humidity: number,
  },
  wind: { speed: number },
  clouds: { all: number },
  timezone: number,
  name: string,
  windSpeed: string,
  errMessage?: string,
  location?: string,
}
