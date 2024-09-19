import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-final',
  standalone: true,
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {
  data: any = {};
  constructor(@Inject(Router) private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.getAllData();  // Obtener todos los datos del servicio
  }
}
