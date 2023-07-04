import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private searchDataSubject = new Subject<string>();

  setSearchData(data: string) {
    this.searchDataSubject.next(data);
  }

  getSearchData() {
    return this.searchDataSubject.asObservable();
  }
}
