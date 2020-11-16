import { Router } from 'express'
import SpotifyController from './controllers/SpotifyController'
import WeatherController from './controllers/WeatherController'

const routes = Router()

// routes.get('/accounts/', AccountController.index)
// routes.get('/accounts/:id', AccountController.view)
// routes.post('/accounts/', AccountController.create)

// routes.get('/accounts/:id/transactions/', TransactionController.view)
// routes.post('/accounts/:id/transactions/', TransactionController.create)

// routes.post('/accounts/:id/transfer/:id', TransferController.index)
// routes.get('/accounts/:id/transfer/', TransferController.view)


routes.get('/weather/:city', WeatherController.view)
routes.get('/music/:genre', SpotifyController.getMusic)
export default routes
