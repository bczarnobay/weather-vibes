import axios from 'axios'
import config from 'config'

class WeatherService {
  public async getWeather (city: string) : Promise<Object> {
    const apiKey : string = config.get('weatherApi.apiKey')
    const baseUrl : string = config.get('weatherApi.url')
    const endpoint = baseUrl + `weather?q=${city}&appid=${apiKey}`

    try {
      const response = await axios.get(endpoint)
      const { data } = response        

      const temp = Math.round(data.main.temp - 273.15)
      return temp

    } catch (error) {
      return error
    }
  }
}

export default new WeatherService()