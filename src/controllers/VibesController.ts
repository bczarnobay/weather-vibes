import { Request, Response } from 'express'
import axios from 'axios'
import config from 'config'

import WeatherService from '../services/WeatherService'

class VibesController {
    public async view (req: Request, res: Response){
      const { city } = req.params

      // const { temp } = await WeatherService.getWeather(city)
    }
}

export default new VibesController()