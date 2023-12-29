import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'justlands';
  greeting: null | string = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/greeting').subscribe((res) => {
      this.greeting = res as string;
    });
  }
}
