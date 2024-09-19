import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temperatura',
  standalone: true,
  imports: [],
  templateUrl: './temperatura.component.html',
  styleUrl: './temperatura.component.scss'
})
export class TemperaturaComponent {
   constructor(private router: Router) {}
goToSignosVitales() {
  this.router.navigate(['/signos-vitales']);
throw new Error('Method not implemented.');
}
}


