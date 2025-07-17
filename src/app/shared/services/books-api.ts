import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { BookDTO } from '../../dtos/book.dto';
import { Book } from '../../models/book';
import { AuthorsApi } from './authors-api';

@Injectable({
  providedIn: 'root',
})
export class BooksApi {
  #httpClient = inject(HttpClient);
  #authorService = inject(AuthorsApi);

  #getBooks = () => this.#httpClient.get<BookDTO[]>(`${environment.apiUrl}/books`);

  getBooksWithAuthors = (): Observable<Book[]> =>
    forkJoin({
      books: this.#getBooks(),
      authors: this.#authorService.getAuthors(),
    }).pipe(
      map(({ books, authors }) =>
        books.map(
          (book): Book => ({
            ...book,
            author: authors.find((author) => author.id === book.authorId) ?? null,
            coverImageUrl: `/img/rectangle-${book.id}.jpg`,
          }),
        ),
      ),
    );
}
