import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import { BooksApi } from '../../shared/services/books-api';
import { BookCard } from './book-card/book-card';

@Component({
  selector: 'app-bookstore',
  imports: [FormsModule, BookCard],
  templateUrl: './bookstore-page.html',
  styleUrl: './bookstore-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // TODO: Voir si c'est nécessaire pour les composants sans inputs de type page
})
export default class BookstorePage {
  #booksService = inject(BooksApi);

  books = signal<Book[]>([]);

  constructor() {
    this.#booksService
      .getBooksWithAuthors()
      .pipe(takeUntilDestroyed())
      .subscribe((books) => this.books.set(books));
  }
}
