import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-calculator',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.scss']
})
export class SimpleCalculatorComponent {

  constructor(){
  }

  operationNumber: number = 0;
  currentOperator = signal('+');
  operationResult = signal(0);
  resultCalc!: number;

  firstInput: number | null = null;
  secondInput: number | null = null;

  buttonClicked(val: any) {
    console.log("Button clicked with operator:", val);
    this.currentOperator.set(val);  // Set the current operator signal
    let result = this.calculateOutput(this.currentOperator());
    console.log("Calculated result:", result);
    this.operationResult.set(result);  // Update the result using signal
    this.operationNumber++;
  }

  clearInputs(){
    this.firstInput = null;
    this.secondInput = null;
    this.operationNumber = 0;
    this.operationResult.set(0);

  }

  calculateOutput(operator: string) {
    console.log("Current operator:", operator);

    let firstInpVal = this.firstInput !== null ? Number(this.firstInput) : 0;
    let secondInpVal = this.secondInput !== null ? Number(this.secondInput) : 0;

    if (!isNaN(firstInpVal) && !isNaN(secondInpVal)) {
      console.log("First input value:", firstInpVal);
      console.log("Second input value:", secondInpVal);

      switch (operator) {
        case '+':
          return firstInpVal + secondInpVal;

        case '-':
          return firstInpVal - secondInpVal;

        case '*':
          return firstInpVal * secondInpVal;

        case '/':
          if (secondInpVal !== 0) {
            return firstInpVal / secondInpVal;  // Fixed division logic
          } else {
            console.log('Cannot divide by zero');
            return 0;
          }

        default:
          return 0;
      }
    } else {
      console.log('Invalid input');
      return 0;
    }
  }
}
