import { Component } from '@angular/core';
import mockData from './mock-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any | undefined;

  fetchData(): void {
    this.data = mockData;
  }
}

