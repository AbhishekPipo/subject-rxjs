import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchedData: string = '';

  onSearch(data: string) {
    this.searchedData = 'You have entered: ' + data;
  }
}
