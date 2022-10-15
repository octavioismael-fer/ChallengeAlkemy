import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { debounceTime } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {

  search = new FormControl('');

  @Output('search') searchEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: any) => this.searchEmitter.emit(value));
  };
};
