import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepositoryMock } from '../../infra/mocks/users/users.repository.mock';
import { UsersRepository } from '../../infra/users/users.repository';
import { UsersService } from '../../usecases/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from '../../usecases/auth/auth.service'

describe('authController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        UsersService,
        {
          provide: UsersRepository,
          useClass: UsersRepositoryMock,
        }
      ]
    }).compile();

    authController = app.get<AuthController>(AuthController);
  });

  describe('root', () => {
    it("should return -> token-usuario", async () => {
      const result = await authController.login({
        email: "john",
        password: "changeme",
      })

      expect(result).toBe("token-usuário");
    });
  });
});
