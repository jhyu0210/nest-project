import { CanActivate, Injectable, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthGuard implements CanActivate {

  async canActivate(context: ExecutionContext) { 
    const ctx = await GqlExecutionContext.create(context).getContext();//
    // console.log("########ctx.headers of req:: ",ctx.req.headers);
    
    if (!ctx.req.headers.authorization) {
      // console.log('no auth....')
      return false;
    }
    ctx.user = await this.validateToken(ctx.req.headers.authorization);
    console.log(">>> ctx.user in AuthGuard", ctx.user);
    return true;
  }
  async validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    const token = auth.split(' ')[1];
    try {
      const user = await jwt.verify(token, 'secret');
      console.log('>>> verified user???', user);
      return user;
    } catch (err) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }
}
