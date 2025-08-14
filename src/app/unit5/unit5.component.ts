import { Component } from '@angular/core';

@Component({
  selector: 'app-unit5',
  templateUrl: './unit5.component.html',
  styleUrls: ['./unit5.component.css']
})
export class Unit5Component {

  visible = 'lernziele';

  checkAnswers() {
    const inputs = document.querySelectorAll('input[type="number"]') as NodeListOf<HTMLInputElement>;
    const correctAnswers = [6, 4, 3, 5, 7];

    inputs.forEach((input, index) => {
      const value = parseInt(input.value, 10);
      const correctAnswer = correctAnswers[index];
      const feedbackElement = document.getElementById(`feedback${index + 1}`);

      if (value === correctAnswer) {
        feedbackElement!.className = 'alert alert-success';
        feedbackElement!.textContent = 'Richtig!';
      } else {
        feedbackElement!.className = 'alert alert-danger';
        feedbackElement!.textContent = 'Falsch!';      }
    });
  }
}
