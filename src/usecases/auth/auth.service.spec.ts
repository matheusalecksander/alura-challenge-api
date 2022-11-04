import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepositoryMock } from '../../infra/mocks/users/users.repository.mock';
import { UsersRepository } from '../../infra/users/users.repository';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UsersService,
        JwtService,
        {
          provide: UsersRepository,
          useClass: UsersRepositoryMock,
        }
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
