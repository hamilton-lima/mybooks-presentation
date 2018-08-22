import { Injectable } from '@angular/core';

import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  findBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url + '/books');
  }

  add(book: Book) {
    return this.http.post(this.url + '/books', book);
  }

  url = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
}
