import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@prisma/client';
import { UsersRepositoryMock } from '../../infra/mocks/users/users.repository.mock';
import { UsersRepository } from '../../infra/users/users.repository';
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
        },
      ]
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an user', async () => {
    const resultado = await service.create(userMock);

    expect(resultado).toHaveProperty("email");
  })

  it('should throw if user email already exists', async () => {
    const result = service.create(userMockInvalido);

    expect(result).rejects.toThrow();
  })

  it('should return an user', async () => {
    const result = await service.findByEmail("john");

    expect(result).toHaveProperty("id");
  })

  it('should throw if email not user found', async () => {
    const result = service.findByEmail("invalid_email");

    expect(result).rejects.toThrow();
  })
});
