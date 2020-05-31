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

    const weather = new Weather(locations)
    const weatherInfo = await weather.getWeatherInfo()

    expect(weatherInfo).toEqual([mockResponseData])
  })

  it('Should fetch weather info from api when location not found', async () => {
    stub.throws(mockError)

    const weather = new Weather(locations)
    const weatherInfo = await weather.getWeatherInfo()

    expect(weatherInfo).toEqual(mockNoLocation)
  })
})
