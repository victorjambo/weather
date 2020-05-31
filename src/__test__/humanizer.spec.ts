import { humanizeResponse } from '../utils/humanizer'
import { IWeather, IErrorNotFound } from '../utils/types'


describe('humanizer', () => {
  const datatohumanize: Array<IWeather|IErrorNotFound> = [
    {
      humidity: 59,
      timezone: -14400,
      clouds: 40,
      location: 'Nairobi',
      windSpeed: 2.1,
      weather: 'scattered clouds',
    },
    {
      humidity: 88,
      timezone: -14400,
      clouds: 40,
      location: 'Eldoret',
      windSpeed: 2.1,
      weather: 'scattered clouds',
    },
  ]

  it('should humanize weather information', () => {
      const consoleSpy = jest.spyOn(console, 'log')

      humanizeResponse(datatohumanize)

      expect(consoleSpy).toBeCalled()
      expect(consoleSpy).toBeCalledTimes(2)
  })

  it('should humanize when city not found ', () => {
      const data = Object.assign([], datatohumanize)

      data.push({
        location: 'wrong location',
        errMessage: 'city not found',
      })

      const consoleSpyLog = jest.spyOn(console, 'log')

      humanizeResponse(data)

      expect(consoleSpyLog).toBeCalled()
      expect(consoleSpyLog).toBeCalledTimes(3)
  })
})
