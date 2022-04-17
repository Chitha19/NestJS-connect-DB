import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/1')
  async hana(): Promise<any>{
    return this.userService.one()
  }
  @Get('/2')
  async too(): Promise<any>{
    return this.userService.two()
  }
  @Get('/3')
  async tee(): Promise<any>{
    return this.userService.three()
  }
  @Get('/4')
  async foo(): Promise<any>{
    return this.userService.four()
  }
  @Get('/5')
  async fly(): Promise<any>{
    return this.userService.five()
  }
  @Get('/6')
  async sig(): Promise<any>{
    return this.userService.six()
  }
  @Get('/7')
  async heaven(): Promise<any>{
    return this.userService.seven()
  }
}
