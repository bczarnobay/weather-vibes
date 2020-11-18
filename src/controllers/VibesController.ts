import { Request, Response } from 'express'
import VibesService from '../services/VibesService'

class VibesController {
  public async view (req: Request, res: Response){
    const { city } = req.params

    try {
      const response = await VibesService.getRecommendations(city)
      return res.json(response)
    } catch (error) {
      res.status(400).send({message: error.message})
    }
  }
}

export default new VibesController()