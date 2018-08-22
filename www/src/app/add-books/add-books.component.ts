import { Book } from '../book';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  @Output()
  after = new EventEmitter<Book>();

  book = new Book();

  constructor(private service: BooksService) {}
  ngOnInit(): void {}

  add() {
    this.service.add(this.book).subscribe((book: Book) => {
      console.log('Book created', book);
      this.after.emit(book);
    });
    this.book = new Book();
  }
}
