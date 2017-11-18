import { HomeIonicComponent } from './home-ionic/home-ionic.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rootPage = HomeIonicComponent;
  title = 'app';

}
