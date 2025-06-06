import { Module } from '@nestjs/common';
import { CreateUserUseCase } from '@application/use-cases/order/create-user.use-case';
import { RepositoryModule } from '@infrastructure/repositories/repositories.module';
import { UsersController } from '@interfaces/controllers/users.controller';

@Module({
  imports: [RepositoryModule],
  controllers: [UsersController],
  providers: [CreateUserUseCase],
})
export class UsersModule {}
