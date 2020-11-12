import { Component, OnInit } from '@angular/core';
import { UsuaroModel } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuaroModel = new UsuaroModel();

  constructor() { }

  ngOnInit(): void {
    this.usuario.documento = 1001062534;
  }

  onSubmit() {
    console.log(`recibido ` + this.usuario);
  }

}
