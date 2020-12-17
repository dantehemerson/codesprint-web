import { UserDto } from '../../user/types/user.dto'
import { CategoryDto } from '../../categories/category.type'

export type ChallengeDto = {
  id: string;
  title: string;
  intro: string;
  thumbnail: string;
  bodyHtml: string;
  bodyMarkdown: string;
  categories: CategoryDto[];
  createdBy?: UserDto;
  createdAt: Date;
  updatedAt: Date;
}
