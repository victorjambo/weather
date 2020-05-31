import * as sinon from 'sinon'
import {SinonStub} from 'sinon'
import http from '../utils/http'

import {mockResponseData} from './mockData'
import Weather from '../weather'

describe('weather', () => {
  const locations = ['Nairobi']

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

    expect(weatherInfo).toEqual(mockResponseData)
  })
})
