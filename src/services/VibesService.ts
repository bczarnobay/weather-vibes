import axios from 'axios'
import config from 'config'
import IRecommendation from 'src/models/interfaces/recommendation'
import SpotifyService from './SpotifyService'
import WeatherService from './WeatherService'

class VibesService {
  public async getRecommendations (city: string) : Promise<IRecommendation> {
    const { temperature }  = await WeatherService.getWeather(city)
    let genre

    if ( temperature > 30 ) {
      genre = 'party'
    } else if ( temperature >= 15 && temperature <= 30) {
      genre = 'pop'
    } else if ( temperature >= 10 && temperature <= 14) {
      genre = 'rock'
    } else {
      genre = 'classical'
    }

    
    const recommendation = await SpotifyService.getMusic(genre)
    let response : IRecommendation = {
      city: city,
      genre: genre,
      link: recommendation.link
    }

    return response
  }
}

export default new VibesService()