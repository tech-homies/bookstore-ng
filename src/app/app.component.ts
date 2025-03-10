import { Component } from '@angular/core';
import { NavComponent } from './layout/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
