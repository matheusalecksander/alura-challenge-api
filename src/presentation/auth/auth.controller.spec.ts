import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepositoryMock } from '../../infra/mocks/users/users.repository.mock';
import { UsersRepository } from '../../infra/users/users.repository';
import { UsersService } from '../../usecases/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from '../../usecases/auth/auth.service'
import { JwtService, JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { agent } from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('authController', () => {
  let authController: AuthController;
  let app: INestApplication;

  beforeEach(async () => {
    const mock: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule.register({ defaultStrategy: 'jwt'}),
        JwtModule.register({
          secretOrPrivateKey: "jwt-teste",
        }),
      ],
      controllers: [AuthController],
      providers: [
        AuthService,
        UsersService,
        JwtService,
        {
          provide: UsersRepository,
          useClass: UsersRepositoryMock,
        }
      ]
    }).compile();
    authController = mock.get<AuthController>(AuthController);
    
    app = mock.createNestApplication();
    await app.init();
  });

  describe('root', () => {
    it("should return -> token", async () => {
      const user = {
        email: "john",
        password: "changeme",
      }
      
      agent(app.getHttpServer()).post('/auth/login').send(user).expect(200);
    });

    it("should throw if user password not match", async () => {
      const mock = {
        email: "john",
        password: "wrong pass",
      }

      agent(app.getHttpServer()).post('/auth/login').send(mock).expect(400);
    })
  });
});
