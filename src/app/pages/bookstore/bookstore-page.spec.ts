import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BooksApi } from '../../shared/services/books-api';
import BookstorePage from './bookstore-page';

const mockBookService = {
  getBooksWithAuthors: jest.fn().mockReturnValue(of([])),
};

describe('BookstorePage', () => {
  let component: BookstorePage;
  let fixture: ComponentFixture<BookstorePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookstorePage],
      providers: [provideZonelessChangeDetection(), { provide: BooksApi, useValue: mockBookService }],
    }).compileComponents();

    fixture = TestBed.createComponent(BookstorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
