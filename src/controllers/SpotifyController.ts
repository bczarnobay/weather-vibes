import { Request, Response } from 'express'
import axios from 'axios'
import config from 'config'


class SpotifyController {

  private async authorize ()  : Promise<string> {
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

    try {
      const response = await axios.post(authOptions.url, "grant_type=client_credentials", headers)
      return response.data.access_token
    } catch(error) {
      console.log(error)
    }  
  }

  public async getMusic () {
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

    try {
      const response = await axios.post(authOptions.url, "grant_type=client_credentials", headers)
      // return response.data.access_token
      console.log(response.data)
    } catch(error) {
      console.log(error)
    }  
  }

}

export default new SpotifyController()