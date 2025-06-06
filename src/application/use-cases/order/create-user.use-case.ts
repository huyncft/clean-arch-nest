import { Inject, Injectable } from '@nestjs/common';
import { RepositoryTokens } from '@domain/constants/repository.tokens';
import { Users } from '@domain/entities/users.entity';
import { IUserRepository } from '@domain/repositories/user.repository.interface';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(RepositoryTokens.ORDER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(
    userData: Omit<Users, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Users> {
    return this.userRepository.findById(userData.id);
  }
}
