import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peso',
  standalone: true,
  templateUrl: './peso.component.html',
  styleUrls: ['./peso.component.scss']
})
export class PesoComponent {
   constructor(private router: Router) {}
goToTemperatura() {
  this.router.navigate(['/temperatura']);
throw new Error('Method not implemented.');
}
}