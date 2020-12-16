import { UserDto } from '../../users/types/user.dto'
import { CategoryDto } from '../../categories/category.type'

export type ChallengeDto = {
  id: string;
  title: string;
  intro: string;
  thumbnail: string;
  bodyHtml: string;
  bodyMarkdown: string;
  categories: CategoryDto[];
  createdBy: UserDto | string;
  createdAt: Date;
  updatedAt: Date;
}
