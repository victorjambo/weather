import axios from 'axios'
import * as dotenv from 'dotenv'

const result = dotenv.config()
if (result.error) {
  // Throw error if .env file is not created
  throw result.error
}

const http = axios

const API_URL = process.env.API_URL
const API_APP_ID = process.env.API_APP_ID

http.defaults.baseURL = API_URL

http.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    appid: API_APP_ID,
  }
  return config
})

export default http
