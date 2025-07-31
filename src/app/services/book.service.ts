import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  private books: Book[] = [];

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
  }
}
