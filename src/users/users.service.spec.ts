import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@prisma/client';
import { UsersRepository } from './infra/users.repository';
import { UsersRepositoryMock } from './mocks/users.repository.mock';
import { UsersService } from './users.service';

const userMock: User = {
  email: "email@email.com",
  id: "some_id",
  name: "some_name",
  password: "some_password",
}

const userMockInvalido: User = {
  email: "john",
  id: "some_id",
  name: "some_name",
  password: "some_password",
}

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { 
          provide: UsersRepository,
          useClass: UsersRepositoryMock
        }
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an user', async () => {
    const resultado = await service.create(userMock);

    expect(resultado).toBe(true);
  })

  it('should throw if user email already exists', async () => {
    const result = service.create(userMockInvalido);

    expect(result).rejects.toThrow();
  })

  it('should return user token', async () => {
    const result = await service.login(userMock.email, userMock.password);

    expect(result).toBe("token-usuário");
  })
});
