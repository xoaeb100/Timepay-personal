import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private title:Title,
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Search Society @ Timepay 2.0")
  }

}
