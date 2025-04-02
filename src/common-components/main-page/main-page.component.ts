import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleCalculatorComponent } from '../../simpleApps/simple-calculator/simple-calculator.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,
            SimpleCalculatorComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
