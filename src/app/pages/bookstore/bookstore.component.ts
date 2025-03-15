import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import { BookService } from '../../shared/services/book.service';
import { BookCardComponent } from './book-card/book-card.component';

@Component({
  selector: 'app-bookstore',
  imports: [FormsModule, BookCardComponent],
  templateUrl: './bookstore.component.html',
  styleUrl: './bookstore.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // TODO: Voir si c'est nécessaire pour les composants sans inputs de type page
})
export default class BookstoreComponent {
  #booksService = inject(BookService);

  books = signal<Book[]>([]);

  constructor() {
    this.#booksService
      .getBooksWithAuthors()
      .pipe(takeUntilDestroyed())
      .subscribe((books) => this.books.set(books));
  }
}
