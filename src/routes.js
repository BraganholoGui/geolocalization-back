import {
    Router
} from 'express'
import authMiddleware from './app/middlewares/authMiddleware.js'
// import ApiPing from './controllers/ApiPing.js'
// import Session from './controllers/Session.js'
// import Contact from './controllers/Contact.js'
// import Role from './controllers/Role.js'
// import Person from './controllers/Person.js'
// import Team from './controllers/Team.js'
// import User from './controllers/User.js'
// import Theme from './controllers/Theme.js'
// import Priority from './controllers/Priority.js'
// import Status from './controllers/Status.js'
// import Goal from './controllers/Goal.js'
// import Task from './controllers/Task.js'
// import Product from './controllers/Product.js'
// import Material from './controllers/Material.js'
// import Buyer from './controllers/Buyer.js'
// import Stock from './controllers/Stock.js'
// import Supplier from './controllers/Supplier.js'
// import Purchase from './controllers/Purchase.js'
// import Sale from './controllers/Sale.js'
// import SupplierPurchase from './controllers/SupplierPurchase.js'
// import TeamUser from './controllers/TeamUser.js'

const routes = new Router()

routes.use(authMiddleware)
//Ping
// routes.get("/ping", ApiPing.index)


// routes.post('/users', User.store)
// routes.put('/users/:id', User.update)
// routes.get('/users', User.index)
// routes.get('/users/:id', User.getById)
// routes.delete('/users/:id', User.delete)

// Sessions
// routes.post('/login', Session.login)
// routes.put('/change-password/:id', Session.changePass)

export default routes;
