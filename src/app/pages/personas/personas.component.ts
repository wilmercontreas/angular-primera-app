import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  contactos: any[] = [];

  constructor(private serviceService: ServiceService) {
    this.contactos = serviceService.getContacts();
  }

  ngOnInit(): void {
  }

}
