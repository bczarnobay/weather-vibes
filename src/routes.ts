import { Router } from 'express'
import SpotifyController from './controllers/SpotifyController'
import WeatherController from './controllers/WeatherController'
import VibesController from './controllers/VibesController'

const routes = Router()

routes.get('/weather/:city', WeatherController.view)
routes.get('/music/:genre', SpotifyController.getMusic)
routes.get('/vibes/:city', VibesController.view)

export default routes
