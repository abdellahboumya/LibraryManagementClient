import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../entities/Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books?: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      {
        id: 1, title: 'To Kill a Mockingbird Mockingbird Mockingbird Mockingbird', author: 'Harper Lee',
        description: 'The Pulitzer Prize-winning novel about a child\'s view of race and justice in the Depression-era South',
        isAvailable: false, coverImage: 'https://covers.openlibrary.org/b/id/12606523-M.jpg',
        genres: ['Fiction', 'Classics'],
      },
      {
        id: 2, title: 'Pride and Prejudice', author: 'Jane Austen',
        description: 'A classic novel about manners, upbringing, morality, education, and marriage in Georgian England',
        isAvailable: true, coverImage: 'https://covers.openlibrary.org/b/id/12991919-M.jpg',
        genres: ['Fiction', 'Classics']
      },
      {
        id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald',
        description: 'A novel about decadence, idealism, resistance to change, social upheaval, and excess, exploring the decadence and excess of the Jazz Age',
        isAvailable: true, coverImage: 'https://covers.openlibrary.org/b/id/9367541-M.jpg',
        genres: ['Fiction', 'Classics']
      },
      {
        id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee',
        description: 'The Pulitzer Prize-winning novel about a child\'s view of race and justice in the Depression-era South',
        isAvailable: false, coverImage: 'https://covers.openlibrary.org/b/id/12606523-M.jpg',
        genres: ['Fiction', 'Classics'],
      },
      {
        id: 2, title: 'Pride and Prejudice', author: 'Jane Austen',
        description: 'A classic novel about manners, upbringing, morality, education, and marriage in Georgian England',
        isAvailable: true, coverImage: 'https://covers.openlibrary.org/b/id/12991919-M.jpg',
        genres: ['Fiction', 'Classics']
      },
      {
        id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald',
        description: 'A novel about decadence, idealism, resistance to change, social upheaval, and excess, exploring the decadence and excess of the Jazz Age',
        isAvailable: true, coverImage: 'https://covers.openlibrary.org/b/id/9367541-M.jpg',
        genres: ['Fiction', 'Classics']
      },{
        id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee',
        description: 'The Pulitzer Prize-winning novel about a child\'s view of race and justice in the Depression-era South',
        isAvailable: false, coverImage: 'https://covers.openlibrary.org/b/id/12606523-M.jpg',
        genres: ['Fiction', 'Classics'],
      },
      {
        id: 2, title: 'Pride and Prejudice', author: 'Jane Austen',
        description: 'A classic novel about manners, upbringing, morality, education, and marriage in Georgian England',
        isAvailable: true, coverImage: 'https://covers.openlibrary.org/b/id/12991919-M.jpg',
        genres: ['Fiction', 'Classics']
      },
      {
        id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald',
        description: 'A novel about decadence, idealism, resistance to change, social upheaval, and excess, exploring the decadence and excess of the Jazz Age',
        isAvailable: true, coverImage: 'https://covers.openlibrary.org/b/id/9367541-M.jpg',
        genres: ['Fiction', 'Classics']
      }
    ];

  }
}