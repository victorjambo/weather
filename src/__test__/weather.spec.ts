import * as sinon from 'sinon'
import {SinonStub} from 'sinon'
import axios from 'axios'
import {mockResponseData} from './mockData'

declare const getWeatherInfo // TODO function not created yet

describe('weather', () => {
  const locations = ['Nairobi']

  let stub: SinonStub

  beforeEach(() => {
    stub = sinon.stub(axios, 'get')
  })
  afterEach(() =>{
    stub.restore()
  })

  it('Should fetch weather info from api', async () => {
    stub.resolves(Promise.resolve({ data: mockResponseData }))

    const weatherInfo = await getWeatherInfo(locations)

    expect(weatherInfo).toEqual(mockResponseData)
  })
})
