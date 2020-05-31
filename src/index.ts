import Weather from './weather'

const main = async () => {
  const locations = process.argv.slice(2)

  const weather = new Weather(locations)

  const weatherInfo = await weather.getWeatherInfo()

  console.log(weatherInfo)
}

main()
