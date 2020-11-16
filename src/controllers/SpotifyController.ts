import { Request, response, Response } from 'express'
import axios from 'axios'
import config from 'config'


class SpotifyController {

  // private async authorize ()  : Promise<string> {
    // const baseUrl = config.get('spotifyApi.url')
    // const clientId = config.get('spotifyApi.clientId')
    // const clientSecret= config.get('spotifyApi.clientSecret')

    // const headers = {
    //   headers: {
    //     Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
    //   }
    // }

    // const authOptions = {
    //   url: 'https://accounts.spotify.com/api/token'
    // }

    // try {
    //   const response = await axios.post(authOptions.url, "grant_type=client_credentials", headers)
    //   return response.data.access_token
    // } catch(error) {
    //   console.log(error)
    // }  
  // }

  public async getMusic (req: Request, res: Response): Promise<Response> {
    const baseUrl = config.get('spotifyApi.url')
    const clientId = config.get('spotifyApi.clientId')
    const clientSecret= config.get('spotifyApi.clientSecret')

    const headers = {
      headers: {
        Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
      }
    }

    const authOptions = {
      url: 'https://accounts.spotify.com/api/token'
    }


    let token
    try {
      const response = await axios.post(authOptions.url, "grant_type=client_credentials", headers)
      token = response.data.access_token
      console.log(response.data)
    } catch(error) {
      console.log(error)
    }  

    const { genre } = req.params
    try {
      const params = {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
      const response = await axios.get(`https://api.spotify.com/v1/browse/categories/${genre}/playlists?limit=1`, params)
      return res.json(response.data)
    } catch (error) {
      res.status(400).send(error)
    }
  }

}

export default new SpotifyController()