import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../common-components/header/header.component';
import { FooterComponent } from '../common-components/footer/footer.component';
import { MainPageComponent } from '../common-components/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
            CommonModule,
            HeaderComponent,
            FooterComponent,
            MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-Simple-Apps';
}
