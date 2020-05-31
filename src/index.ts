import Weather from './weather'
import {getLocationsFromArgv} from './utils/postprocess'

const main = async () => {
  const locations = getLocationsFromArgv(process.argv)

  const weather = new Weather(locations)

  const weatherInfo = await weather.getWeatherInfo()

  console.log(weatherInfo)
}

main()
