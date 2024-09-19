import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any = {};

  // Método para guardar los datos
  setData(key: string, value: any): void {
    this.data[key] = value;
  }

  // Método para obtener los datos
  getData(key: string): any {
    return this.data[key];
  }

  // Método para obtener todos los datos
  getAllData(): any {
    return this.data;
  }
}
