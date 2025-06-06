import { Injectable } from '@nestjs/common';
import { Users } from '@domain/entities/users.entity';
import { IUserRepository } from '@domain/repositories/user.repository.interface';
import { KyselyService } from '@infrastructure/database/kysely/kysely.service';

@Injectable()
export class OrderRepository implements IUserRepository {
  constructor(private readonly kysely: KyselyService) {}

  async findById(id: number): Promise<Users | null> {
    // const order = await this.kysely.client
    //   .selectFrom('orders')
    //   .where('id', id)
    //   .executeTakeFirst();
    const user = await this.kysely.db
      .selectFrom('users')
      .where('id', '=', id)
      .executeTakeFirst();
    return user as Users;
  }
}
