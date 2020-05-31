export const mockResponseData = {
  coord: { lon: 36.82, lat: -1.28 },
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
  base: 'stations',
  main: {
    temp: 290.27,
    feels_like: 288.73,
    temp_min: 289.15,
    temp_max: 291.15,
    pressure: 1023,
    humidity: 68,
  },
  visibility: 10000,
  wind: { speed: 2.73, deg: 77 },
  clouds: { all: 0 },
  dt: 1590871701,
  sys: {
    type: 1,
    id: 2558,
    country: 'KE',
    sunrise: 1590809337,
    sunset: 1590852720,
  },
  timezone: 10800,
  id: 184745,
  name: 'Nairobi',
  cod: 200,
}

export const mockNoLocation =  [{
  location: 'Nairobi',
  errMessage: 'city not found',
}]
