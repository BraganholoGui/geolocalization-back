import {
    Router
} from 'express'
import authMiddleware from './app/middlewares/authMiddleware.js'
import ApiPing from './app/controllers/ApiPing.js'
import Session from './app/controllers/Session.js'
import Contact from './app/controllers/Contact.js'
import Person from './app/controllers/Person.js'
import User from './app/controllers/User.js'
import Geoloc from './app/controllers/Geolocalization.js'


const routes = new Router()

routes.use(authMiddleware)
//Ping
routes.get("/ping", ApiPing.index)


//Contact
routes.get('/contacts/:id', Contact.getById)
routes.get('/contacts', Contact.index)
routes.post('/contacts', Contact.store)
routes.put('/contacts/:id', Contact.update)
routes.delete('/contacts/:id', Contact.delete)

// People
routes.post('/people', Person.store)
routes.put('/people/:id', Person.update)
routes.get('/people', Person.index)
routes.get('/people/:id', Person.getById)
routes.delete('/people/:id', Person.delete)

// User
routes.post('/users', User.store)
routes.put('/users/:id', User.update)
routes.get('/users', User.index)
routes.get('/users/:id', User.getById)
routes.delete('/users/:id', User.delete)

//Geoloc
routes.get('/geoloc', Geoloc.getGeolocalization)

// Sessions
routes.post('/login', Session.login)
routes.put('/change-password/:id', Session.changePass)

export default routes;
