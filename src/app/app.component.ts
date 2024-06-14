import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudsComponent } from './cruds/cruds.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrudsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}
