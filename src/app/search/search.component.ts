import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchData: string = '';

  constructor(private dataService: DataService) {}

  onSearch() {
    this.dataService.setSearchData(this.searchData);
  }
}
