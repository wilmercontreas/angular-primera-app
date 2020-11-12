import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  contacto: any = {};

  constructor(private activatedRoute: ActivatedRoute, private serviceService: ServiceService) {
    this.activatedRoute.params.subscribe( parametro => {
      this.contacto = serviceService.getContact(parametro.i);
    });

  }

  ngOnInit(): void {
  }



}
