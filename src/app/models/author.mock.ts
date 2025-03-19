import { fakerFR as faker } from '@faker-js/faker';
import { Author } from './author';

export const anAuthorMock = (data?: Partial<Author>): Author => ({
  id: data?.id || faker.number.int().toString(),
  name: data?.name || faker.person.fullName(),
  birth_year: data?.birth_year || faker.date.birthdate({ min: 1900, max: 2000, mode: 'year' }).getFullYear(),
});
