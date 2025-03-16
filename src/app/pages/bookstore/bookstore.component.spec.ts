import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BookService } from '../../shared/services/book.service';
import BookstoreComponent from './bookstore.component';

const mockBookService = {
  getBooksWithAuthors: jest.fn().mockReturnValue(of([])),
};

describe('BookstoreComponent', () => {
  let component: BookstoreComponent;
  let fixture: ComponentFixture<BookstoreComponent>;
  let bookService: BookService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookstoreComponent],
      providers: [provideExperimentalZonelessChangeDetection(), { provide: BookService, useValue: mockBookService }],
    }).compileComponents();

    fixture = TestBed.createComponent(BookstoreComponent);
    component = fixture.componentInstance;
    bookService = TestBed.inject(BookService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
