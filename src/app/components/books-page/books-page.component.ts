import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { PageEvent } from '@angular/material/paginator';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Book } from 'src/app/models/book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit{

  booksArray: Book[] = [];
  page: number = 1;
  totalBooks: number = 2239;
  isLoading: boolean = true;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  constructor(private dataService: DataService){}

  ngOnInit(){
    return this.allBooks(this.page);
  }

  pageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.booksArray = [];
    this.isLoading = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.allBooks(this.page);
  }

  allBooks(page: number){
    this.dataService.getAllBooks(page).subscribe(
      books => {
        this.booksArray = books.results;
        this.isLoading = false;
        console.log('Sono qui: ', books.results);
      });
  }

}
