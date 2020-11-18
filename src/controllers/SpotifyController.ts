import { Request, response, Response } from 'express'
import SpotifyService from 'src/services/SpotifyService'

class SpotifyController {
  public async getMusic (req: Request, res: Response): Promise<Response> {
    const { genre } = req.params

    try {
      const response = await SpotifyService.getMusic(genre)
      return res.json(response)
    } catch (error) {
      res.status(400).send({message: error.message})
    }
  }

}

export default new SpotifyController()