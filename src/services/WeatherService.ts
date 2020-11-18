import axios from 'axios'
import config from 'config'
import IWeather from 'src/models/interfaces/weather'

class WeatherService {
  public async getWeather (city: string) : Promise<IWeather> {
    const apiKey : string = config.get('weatherApi.apiKey')
    const baseUrl : string = config.get('weatherApi.url')
    const endpoint = baseUrl + `weather?q=${city}&appid=${apiKey}`

    let weather : IWeather 
    try {
      const response = await axios.get(endpoint)
      const { data } = response        

      const temp = Math.round(data.main.temp - 273.15)
      weather = {
        city: city,
        temperature: temp
      }
      return weather

    } catch (error) {
      return error
    }
  }
}

export default new WeatherService()