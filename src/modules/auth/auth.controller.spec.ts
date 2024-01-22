/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  const mockAuthService = {
    signIn: jest.fn().mockImplementation((email, password) => ({
      message: 'Logueado correctamente',
      data: {
        access_token: 'token',
      },
    })),
    sendRecoverySms: jest.fn().mockImplementation((phone) => ({
      message: 'SMS enviado correctamente',
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should sign in a user', async () => {
    const userDto = {
      email: 'kuzo.mock@gmail.com',
      password: '12345678',
    };
    expect(await controller.signIn(userDto)).toEqual({
      message: 'Logueado correctamente',
      data: {
        access_token: 'token',
      },
    });

    expect(mockAuthService.signIn).toHaveBeenCalled();
  });

  it('should send a recovery sms', async () => {
    const smsRecoveryDto = {
      phone: '12345678',
      countryCode: '56',
    };
    expect(await controller.sendRecoverySms(smsRecoveryDto)).toEqual({
      message: 'SMS enviado correctamente',
    });

    expect(mockAuthService.sendRecoverySms).toHaveBeenCalled();
  });
});
