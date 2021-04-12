
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
    `
    li {
      cursor:pointer;
    }
  `
  ]
})
export class SideMenuComponent implements OnInit{

  
 

  //const { name, email, password} = this.miFormulario.value;
  
  constructor(private router:Router) { }

  

  ngOnInit(): void {
  
  }

  
  onRegresar(){
    this.router.navigateByUrl('/dashboard');
 }

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Agregar',
      ruta: '../movies-usuarios/agregar'
    } 
  ];
}
