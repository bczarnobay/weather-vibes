import axios from 'axios'
import config from 'config'
import ISpotify from 'src/models/interfaces/spotify'

class SpotifyService {
  private async __authorize () : Promise<string> {
    const clientId = config.get('spotifyApi.clientId')
    const clientSecret= config.get('spotifyApi.clientSecret')
    const authUrl = config.get('spotifyApi.authUrl')

    const headers = {
      headers: {
        Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
      }
    }

    try {
      const response = await axios.post(authUrl, "grant_type=client_credentials", headers)
      return response.data.access_token
    } catch {
      throw new Error('Error authorizing')
    }

    
  }

  public async getMusic (genre: string): Promise<ISpotify> {
    const token = await this.__authorize()

    try {
      const params = {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
      const response = await axios.get(`https://api.spotify.com/v1/browse/categories/${genre}/playlists?limit=1`, params)
      
      const data : ISpotify = {
        genre: genre,
        link: response.data.playlists.items[0].external_urls.spotify
      }

      return data
    } catch (error) {
      
    }
  }
}

export default new SpotifyService()