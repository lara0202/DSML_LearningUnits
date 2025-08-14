import { Component } from '@angular/core';

@Component({
  selector: 'app-unit1',
  templateUrl: './unit1.component.html',
  styleUrls: ['./unit1.component.css']
})
export class Unit1Component {

  visible = 'lernziele';

  checkTest() {
    const answers = {
      Aufgabe1: 'A1O1',
      Aufgabe2: 'A2O2',
      Aufgabe3: 'A3O1',
      Aufgabe4: 'A4O1',
      Aufgabe5: 'A5O2',
      Aufgabe6: 'A6O2',
      Aufgabe7: 'A7O1'
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

  showSolution() {
    const solutionText = document.getElementById('solutionText');
    if (solutionText) {
      solutionText.classList.remove('invisible');
    }
  }
}
