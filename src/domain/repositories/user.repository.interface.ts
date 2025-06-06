import { Users } from '../entities/users.entity';

export interface IUserRepository {
  findById(id: number): Promise<Users | null>;
}
