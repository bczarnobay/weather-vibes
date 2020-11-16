import { Request, Response } from 'express'
import axios from 'axios'
import config from 'config'

class WeatherController {
    public async view (req: Request, res: Response){
      const apiKey : string = config.get('weatherApi.apiKey')
      const baseUrl : string = config.get('weatherApi.url')
      const { city } = req.params

      const endpoint = baseUrl + `weather?q=${city}&appid=${apiKey}`

      try {
        const response = await axios.get(endpoint)
        const { data } = response        
        return res.json({temp: data.main.temp})

      } catch (error) {
        res.status(400).send({message: error.message})
      }
    }
}

export default new WeatherController()