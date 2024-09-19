import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-identificacion',
  standalone: true,
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.scss']
})
export class IdentificacionComponent {
  identificacion: string = '';

  constructor(private router: Router, private dataService: DataService) {}

  goToPeso() {
    this.dataService.setData('identificacion', this.identificacion);  // Guardar el valor
    this.router.navigate(['/peso']);  // Ir al siguiente paso
  }
}