// import { Body, Controller, Get, Post } from '@nestjs/common';
// import { CatsService } from './cats.service';
// import { CatDto } from './dto/create-cat.dto';
// import { Cat } from './cat.schema';

// @Controller('cats')
// export class CatsController {
//   constructor(private readonly catsService: CatsService) {}

//   @Post()
//   async create(@Body() createCatDto: CatDto) {
//     await this.catsService.create(createCatDto);
//   }

//   @Get()
//   async findAll(): Promise<Cat[]> {
//     return this.catsService.findAll();
//   }
// }