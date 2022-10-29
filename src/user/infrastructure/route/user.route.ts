import { Router } from 'express'
import { UserUseCase } from '../../application/userUseCase'
import { UserController } from '../controller/user.controller'
import { MockRepository } from '../repository/mock.repository'
import { MongoRepository } from '../repository/mongo.repository'
import { MysqlRepository } from '../repository/mysql.repository'

const route = Router()

// Iniciar repository
let repository = new MongoRepository()
if (process.env.REPOSITORY == 'mongo') {
    repository = new MongoRepository()
} else if (process.env.REPOSITORY == 'mysql') {
    repository = new MysqlRepository()
} else {
    repository = new MockRepository()
}

// Iniciar casos de uso
const userUseCase = new UserUseCase(repository)

// Iniciar user controller
const userController = new UserController(userUseCase)

// definir rutas
route.post('/v1/user', userController.insertController)
route.get('/v1/user', userController.listController)
route.get('/v1/user/:uuid', userController.getController)

export default route