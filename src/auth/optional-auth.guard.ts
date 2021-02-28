import { AuthGuard } from '@nestjs/passport';

export class OptionalAuthGuard extends AuthGuard('jwt') {
  handleRequest(err: any, user: any, info: any, context: any) {
    console.log('>>> OptionalAuthguard user ::: ', user);
    return user;
  }
}

//use for profile controller to provide user
