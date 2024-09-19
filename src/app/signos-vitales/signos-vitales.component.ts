import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signos-vitales',
  standalone: true,
  imports: [],
  templateUrl: './signos-vitales.component.html',
  styleUrl: './signos-vitales.component.scss'
})
export class SignosVitalesComponent {
  constructor(private router: Router, private dataService: DataService) {}
goToFinal() {
    this.router.navigate(['/final']);  // Ir al siguiente paso
}
}
