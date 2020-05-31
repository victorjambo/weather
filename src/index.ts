import Weather from './weather'
import {getLocationsFromArgv, validateLocations} from './utils/postprocess'
import { humanizeResponse } from './utils/humanizer'

const main = async () => {
  const locations = getLocationsFromArgv(process.argv)
  const validatedLocations = validateLocations(locations)

  const weather = new Weather(validatedLocations)

  const weatherInfo = await weather.getWeatherInfo()

  humanizeResponse(weatherInfo)
}

main()
