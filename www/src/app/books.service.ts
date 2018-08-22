import { Injectable } from '@angular/core';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = [
    { name: 'Book 1' }, 
    { name: 'Book 2' }, 
    { name: 'Book 3' }];

  findBooks(): Book[] {
    return this.books;
  }
  
  add(book: Book) {
    this.books.push(book);
  }

  constructor() {}
}
