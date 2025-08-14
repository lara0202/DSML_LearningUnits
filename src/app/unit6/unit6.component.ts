import { Component } from '@angular/core';

@Component({
  selector: 'app-unit6',
  templateUrl: './unit6.component.html',
  styleUrls: ['./unit6.component.css']
})
export class Unit6Component {
  
  visible = 'lernziele';

  showSolution1() {
    const solution1 = document.getElementById('solution1');
    if (solution1) {
      solution1.classList.toggle('invisible');
    }
  }

  showSolution2() {
    const solution2 = document.getElementById('solution2');
    if (solution2) {
      solution2.classList.toggle('invisible');
    }
  }

  showSolution3() {
    const solution3 = document.getElementById('solution3');
    if (solution3) {
      solution3.classList.toggle('invisible');
    }
  }
}
