import { fakerFR as faker } from '@faker-js/faker';
import { anAuthorMock } from './author.mock';
import { Book } from './book';

export const aBookMock = (data?: Partial<Book>): Book => {
  const id = data?.id || faker.number.int().toString();
  return {
    id,
    title: data?.title || faker.lorem.words(3),
    author: anAuthorMock(data?.author ?? undefined),
    publication_year: data?.publication_year || faker.date.past({ years: 20 }).getFullYear(),
    summary: data?.summary || faker.lorem.paragraph(),
    coverImageUrl: data?.coverImageUrl || faker.image.url({}),
  };
};
