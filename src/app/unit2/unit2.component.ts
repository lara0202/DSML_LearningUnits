import { Component } from '@angular/core';

@Component({
  selector: 'app-unit2',
  templateUrl: './unit2.component.html',
  styleUrls: ['./unit2.component.css']
})
export class Unit2Component {

  visible = 'lernziele';

  checkTest() {
    const answers = {
      Aufgabe1: 'A1O2',
      Aufgabe2: 'A2O3',
      Aufgabe3: 'A3O1',
      Aufgabe4: 'A4O1',
      Aufgabe5: 'A5O2',
      Aufgabe6: 'A6O2',
      Aufgabe7: 'A7O2',
      Aufgabe8: 'A8O2'
    };

    for (const [key, value] of Object.entries(answers)) {
      const selectedOption = document.querySelector(`input[name="${key}"]:checked`) as HTMLInputElement | null;
      const feedbackElement = document.getElementById(`feedback${key.slice(-1)}`);
      
      if (selectedOption && selectedOption.value === value) {
        feedbackElement!.textContent = 'Richtig!';
        feedbackElement!.className = 'alert alert-success';
      } else {
        feedbackElement!.textContent = 'Falsch!';
        feedbackElement!.className = 'alert alert-danger';
      }
    }
  }
  
}
