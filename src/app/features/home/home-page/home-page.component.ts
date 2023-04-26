import { Component } from '@angular/core';
import { HomeTemplateComponent } from '../home-template/home-template.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  standalone: true,
  imports: [HomeTemplateComponent],
})
export class HomePageComponent {
  constructor() {}
}
