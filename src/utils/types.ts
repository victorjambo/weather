export interface IErrorNotFound {
  location?: string,
  errMessage?: string,
}

export interface IWeather extends IErrorNotFound {
  weather: string,
  humidity: number,
  clouds: number,
  timezone: number,
  windSpeed: number,
}

export interface IHttpResponse {
  weather: {
    main: string,
    description: string,
  }[],
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
