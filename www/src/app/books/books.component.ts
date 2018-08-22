import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private service: BooksService) {
    this.refresh();
  }

  refresh() {
    this.service.findBooks().subscribe(books => {
      console.log('Books', books);
      this.books = books;
    });
  }

  ngOnInit() {}
}
