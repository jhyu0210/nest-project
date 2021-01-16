// import { Query } from "@nestjs/common";
import { Resolver, Query } from "@nestjs/graphql";

@Resolver()
export class CatsResolver {
  // constructor(
  //   private authorsService: AuthorsService,
  //   private postsService: PostsService,
  // ) {}

  // @Query(returns => Author)
  // async author(@Args('id', { type: () => Int }) id: number) {
  //   return this.authorsService.findOneById(id);
  // }

  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
  @Query(() => String)
  async hello(){
    return 'hello';
  }
}