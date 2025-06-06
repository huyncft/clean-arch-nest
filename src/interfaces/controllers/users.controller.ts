import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '@application/use-cases/order/create-user.use-case';
import { Users } from '@domain/entities/users.entity';
import { CreateUserDto } from '@interfaces/dtos/users/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createUser(@Body() userData: CreateUserDto): Promise<Users> {
    return this.createUserUseCase.execute(userData as any);
  }
}
