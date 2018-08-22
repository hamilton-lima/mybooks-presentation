import { Book } from '../book';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  book = new Book();

  constructor(private service: BooksService) {}
  ngOnInit(): void {}

  add() {
    this.service.add(this.book).subscribe(book => {
      console.log('Book created', book);
    });
    this.book = new Book();
  }
}
