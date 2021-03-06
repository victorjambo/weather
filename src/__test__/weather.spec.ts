import * as sinon from 'sinon'
import {SinonStub} from 'sinon'
import http from '../utils/http'

import {mockResponseData, mockNoLocation} from './mockData'
import Weather from '../weather'

describe('weather', () => {
  const locations = ['Nairobi']
  const mockError = new Error('Generic Error')

  let stub: SinonStub

  beforeEach(() => {
    stub = sinon.stub(http, 'get')
  })
  afterEach(() =>{
    stub.restore()
  })

  it('Should fetch weather info from api', async () => {
    stub.resolves(Promise.resolve({ data: mockResponseData }))

    const expectedWeatherInfo = [
      {
        humidity: 68,
        timezone: 10800,
        clouds: 0,
        location: 'Nairobi',
        windSpeed: 2.73,
        weather: 'clear sky',
      },
    ]

    const weather = new Weather(locations)
    const weatherInfo = await weather.getWeatherInfo()

    expect(weatherInfo).toEqual(expectedWeatherInfo)
  })

  it('Should fetch weather info from api when location not found', async () => {
    stub.throws(mockError)

    const weather = new Weather(locations)
    const weatherInfo = await weather.getWeatherInfo()

    expect(weatherInfo).toEqual(mockNoLocation)
  })

  it('should handleError', () => {
    const consoleSpy = jest.spyOn(console, 'log')

    const weather = new Weather(locations)
    weather.handleError(mockError)

    expect(consoleSpy).toBeCalled()
    expect(consoleSpy).toBeCalledTimes(1)
    expect(consoleSpy).toHaveBeenCalledWith('\x1b[31m%s\x1b[0m', mockError.message)
  })

  it('should handleError with no location found', () => {
    const consoleSpy = jest.spyOn(console, 'log')

    const weather = new Weather(locations)
    weather.handleError(mockError, 'dummy location')

    expect(consoleSpy).toBeCalled()
    expect(consoleSpy).toBeCalledTimes(2)
    expect(consoleSpy).toHaveBeenCalledWith('\x1b[31m%s\x1b[0m', '"dummy location" city not found\n')
  })

  it('should fetch multiple locations from api', async () => {
    stub.resolves(Promise.resolve({ data: mockResponseData }))

    const multipleLocations = ['Nairobi', 'New york']

    const expectedWeatherInfo = [
      {
        humidity: 68,
        timezone: 10800,
        clouds: 0,
        location: 'Nairobi',
        windSpeed: 2.73,
        weather: 'clear sky',
      },
      {
        humidity: 68,
        timezone: 10800,
        clouds: 0,
        location: 'Nairobi',
        windSpeed: 2.73,
        weather: 'clear sky',
      },
    ]

    const weather = new Weather(multipleLocations)
    const weatherInfo = await weather.getWeatherInfo()

    expect(weatherInfo).toEqual(expectedWeatherInfo)
  })
})
