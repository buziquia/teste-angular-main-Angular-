import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  titulo = "Titulo da pagina"
  now = new Date();
  modelo = "";


  constructor() { }

  adicionar(): void {
    (<HTMLInputElement>document.getElementById('resbotao')).innerText = this.modelo
  }

  ngOnInit(): void {
  }

}




