// // import {
// //   ConflictException,
// //   Injectable,
// //   InternalServerErrorException,
// //   UnauthorizedException,
// // } from '@nestjs/common';
// // import { JwtService } from '@nestjs/jwt';
// // import { InjectRepository } from '@nestjs/typeorm';
// // import { Repository } from 'typeorm';
// // import { UserEntity } from 'src/entities/user.entity';
// // import {
// //   LoginDTO,
// //   RegisterDTO,
// //   AuthResponse,
// //   AuthPayload,
// // } from 'src/models/user.model';

// // @Injectable()
// // export class AuthService {
// //   constructor(
// //     @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
// //     private jwtService: JwtService,
// //   ) {}

// //   // async validateUser(username: string, password: string): Promise<any> {
// //   //   const user = await this.userRepo.findOne(username);
// //   //   if (user && user.password === password) {
// //   //     const { password, ...result } = user;
// //   //     return result;
// //   //   }
// //   //   return null;
// //   // }

// //   async register(credentials: RegisterDTO): Promise<AuthResponse> {
// //     console.log('>>> Service credentials :', credentials);
// //     try {
// //       const user = this.userRepo.create(credentials);
// //       await user.save();
// //       const payload = { username: user.username };
// //       console.log('>>> Service payload :', payload);
// //       console.log('Serivce result:::', this.jwtService.sign(payload));
// //       const token = this.jwtService.sign(payload); //this returns jwt token???
// //       console.log('>>> Service : user ', user);
// //       console.log('>>> Service : token ', token);
// //       return { ...user.toJSON(), token }; //token inside user object
// //     } catch (err) {
// //       if (err.code === '23505') {
// //         throw new ConflictException('Username has already been taken');
// //       }
// //       throw new InternalServerErrorException();
// //     }
// //   }

// //   async login({ email, password }: LoginDTO): Promise<AuthResponse> {
// //     try {
// //       console.log('>>> Service : user ', email);
// //       const user = await this.userRepo.findOne({ where: { email } });
// //       const isValid = await user.comparePassword(password);

// //       if (!isValid) {
// //         throw new UnauthorizedException('Invalid credentials');
// //       }
// //       const payload = { username: user.username };
// //       console.log('Service Login payload:::', payload);
// //       // console.log(
// //       //   'Serivce result:::',
// //       //   this.jwtService.sign({ username: user.username }),
// //       // );
// //       // const token = 'this.jwtService.sign(payload);';
// //       const token = this.jwtService.sign(payload);
// //       console.log('>>> user.toJSON()', user.toJSON());
// //       return { ...user.toJSON(), token };
// //     } catch (err) {
// //       throw new UnauthorizedException('Invalid credentials 2');
// //     }
// //   }

// //   // async createToken() {
// //   //   const user: AuthPayload = { username: 'jhyu' };
// //   //   const accessToken = this.jwtService.sign(user);
// //   //   return accessToken;
// //   // }
// // }

// import {
//   ConflictException,
//   Injectable,
//   InternalServerErrorException,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { UsersService } from '../users/user.service';
// import { JwtService } from '@nestjs/jwt';
// import { UserEntity } from '../entities/user.entity';
// import {
//   AuthResponse,
//   LoginDTO,
//   RegisterDTO,
//   UserResponse,
// } from 'src/models/user.model';
// @Injectable()
// export class AuthService {
//   userRepo: any;
//   constructor(
//     private usersService: UsersService,
//     private jwtService: JwtService,
//   ) {}

//   async validateUser(email: string, pass: string): Promise<UserResponse> {
//     const user = await this.usersService.findOne(email);
//     console.log(user);
//     if (user && user.comparePassword(pass)) {
//       const { password, ...result } = user;
//       return result;
//     }
//     return null;
//   }

//   // async login(user: any) {
//   //   const payload = { username: user.username };
//   //   return {
//   //     access_token: this.jwtService.sign(payload),
//   //   };
//   // }
//   async login({ email, password }: LoginDTO): Promise<AuthResponse> {
//     try {
//       console.log('>>> Service : user ', email);
//       const user = await this.usersService.findOne(email);
//       const isValid = await user.comparePassword(password);
//       console.log('>>>AuthService isVlaid ', isValid);

//       if (!isValid) {
//         throw new UnauthorizedException('Invalid credentials');
//       }
//       const payload = { username: user.username };
//       console.log('Service Login payload:::', payload);
//       // console.log(
//       //   'Serivce result:::',
//       //   this.jwtService.sign({ username: user.username }),
//       // );
//       // const token = 'this.jwtService.sign(payload);';
//       const token = this.jwtService.sign(payload);
//       console.log('>>> user.toJSON()', user.toJSON());
//       return { ...user.toJSON(), token };
//     } catch (err) {
//       throw new UnauthorizedException('Invalid credentials 2');
//     }
//   }
//   async register(credentials: RegisterDTO): Promise<AuthResponse> {
//     console.log('>>> Service credentials :', credentials);
//     try {
//       console.log('try register...');
//       const userInDb = await this.usersService.findOne(credentials.email);
//       //when not found ==> throwing error
//       console.log('>>> UserinDb', userInDb);

//       console.log('creadentials again ', credentials);
//       const user = await this.usersService.createUser(credentials);
//       // await user.save();
//       const payload = { username: user.username };
//       console.log('>>> Service payload :', payload);
//       console.log('Serivce result:::', this.jwtService.sign(payload));
//       const token = this.jwtService.sign(payload); //this returns jwt token???
//       console.log('>>> Service : user ', user);
//       console.log('>>> Service : token ', token);
//       return { ...user.toJSON(), token }; //token inside user object
//     } catch (err) {
//       if (err.code === '23505') {
//         throw new ConflictException('Username has already been taken');
//       }
//       throw new InternalServerErrorException();
//     }
//   }
// }
