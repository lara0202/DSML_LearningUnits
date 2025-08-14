import { Component } from '@angular/core';

@Component({
  selector: 'app-unit4',
  templateUrl: './unit4.component.html',
  styleUrls: ['./unit4.component.css']
})
export class Unit4Component {
  
  visible = 'lernziele';

  showSolution() {
    const solution = document.getElementById('solution') as HTMLElement;
    if (solution) {
      solution.classList.remove('invisible');
      solution.classList.add('visible');
    }
  }
}
