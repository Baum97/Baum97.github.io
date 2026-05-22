import { Component, OnInit } from '@angular/core';
import { inject as injectAnalytics } from '@vercel/analytics';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Baum97 Portfolio';

  ngOnInit(): void {
    injectAnalytics();
  }
}
