import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import Contact from '../app/models/contact.js';
import Person from '../app/models/person.js';
import User from '../app/models/user.js';


const models = [
  Contact,
  Person,
  User,
]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)

    models
    .map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models))
    }
}

export default new Database()
