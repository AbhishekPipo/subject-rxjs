import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnDestroy {
  displayData: string = '';
  private subscription: Subscription;

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.getSearchData().subscribe((data: string) => {
      this.displayData = 'You have entered: ' + data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
