import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
   book: Book = { title: '', author: '' };

  constructor(private bookService: BookService) {}

  addBook() {
    if (this.book.title && this.book.author) {
      this.bookService.addBook({ ...this.book });
      this.book = { title: '', author: '' };
    }
  }
}
