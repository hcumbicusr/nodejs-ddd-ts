// TODO - adaptar para mysql
import { UserEntity } from '../../domain/user.entity'
import { UserRepository } from '../../domain/user.repository'
import UserModel from '../model/user.schema' // ya no se usaría el model sino las querys a la bd

export class MysqlRepository implements UserRepository {
    async findUserById(uuid: string): Promise<any> {
        const user = await UserModel.findOne({ uuid })
        return user
    }
    async registerUser(userIn: UserEntity): Promise<any> {
        const user = UserModel.create(userIn)
        return user
    }
    async listUser(): Promise<any> {
        const user = await UserModel.find()
        return user
    }

}