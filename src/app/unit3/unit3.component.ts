import { Component } from '@angular/core';

@Component({
  selector: 'app-unit3',
  templateUrl: './unit3.component.html',
  styleUrls: ['./unit3.component.css']
})
export class Unit3Component {

  visible = 'lernziele';

  checkAnswers() {
    const inputs = document.querySelectorAll('input[type="number"]') as NodeListOf<HTMLInputElement>;
    const correctAnswers = [7, 4, 6, 2, 3, 1, 5];

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

  checkAnswer() {
    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    const correctOrder = '2,6,4,5,1,3';
    const feedbackElement = document.getElementById('feedbackOrder');

    if (input.value === correctOrder) {
      feedbackElement!.className = 'alert alert-success';
      feedbackElement!.textContent = 'Richtig!';
    } else {
      feedbackElement!.className = 'alert alert-danger';
      feedbackElement!.textContent = 'Falsch!';
    }
  }
}
