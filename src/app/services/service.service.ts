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
      telefono: 123,
      estado: 'soltero'
    },
    {
      nombre: 'alejandro',
      apellido: 'hernandez',
      documneto: 541641,
      telefono: 321,
      estado: 'casado'
    },
    {
      nombre: 'laura',
      apellido: 'garcia',
      documneto: 546654,
      telefono: 85250,
      estado: 'casada'
    },
    {
      nombre: 'jefer',
      apellido: 'hernandez',
      documneto: 32584,
      telefono: 8525648460,
      estado: 'casado'
    },
  ];

  getContacts(){
    return this.contactos;
  }

  getContact(i: number){
    return this.contactos[i];
  }

}
