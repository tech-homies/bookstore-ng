import { BookDTO } from '../dtos/book.dto';
import { Author } from './author';

export type Book = Omit<BookDTO, 'authorId'> & {
  author: Author | null;
  coverImageUrl: string;
};
