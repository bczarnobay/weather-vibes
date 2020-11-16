import { Request, Response } from 'express'
import axios from 'axios'
import config from 'config'

import WeatherService from '../services/WeatherService'

class WeatherController {
  public async view (req: Request, res: Response){
    const { city } = req.params

    try {
      const response = await WeatherService.getWeather(city)
      return res.json({temp: response})

   } catch (error) {
      res.status(400).send({message: error.message})
    }
  }
}

export default new WeatherController()