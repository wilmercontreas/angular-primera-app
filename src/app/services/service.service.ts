import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  private contactos: any[] = [
    {
      nombre: 'wilmer',
      apellido: 'contreras',
      documneto: 684684,
      telefono: 123
    },
    {
      nombre: 'alejandro',
      apellido: 'hernandez',
      documneto: 541641,
      telefono: 321
    },
    {
      nombre: 'laura',
      apellido: 'garcia',
      documneto: 546654,
      telefono: 85250
    },
    {
      nombre: 'jefer',
      apellido: 'hernandez',
      documneto: 32584,
      telefono: 8525648460
    },
  ];

  getContacts(){
    return this.contactos;
  }

}
