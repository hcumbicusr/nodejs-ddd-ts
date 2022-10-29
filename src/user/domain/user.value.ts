import { v4 as uuid } from 'uuid'
import { UserEntity } from "./user.entity";

// se encarga de mapear los datos de la entidad
export class UserValue implements UserEntity {
    name: string;
    email: string;
    uuid: string;
    description: string;

    constructor({ name, email, description }: { name: string; email: string; description?: string }) {
        this.uuid = uuid();
        this.name = name;
        this.email = email;
        this.description = description ?? 'default';
    }

}