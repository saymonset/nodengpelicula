import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../model/articulo';
import { ArticuloService } from '../services/articulo.service';

@Component({
  selector: 'app-detalle-articulo',
  templateUrl: './detalle-articulo.component.html',
  styleUrls: ['./detalle-articulo.component.css']
})
export class DetalleArticuloComponent implements OnInit {

  articulo: Articulo = {
    id: 0,
    nombre: '',
    descripcion:'',
    precio:0,
    imagenURL:''
  } ;

  constructor(
    private articuloService: ArticuloService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarArticulo();
  }

  cargarArticulo(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.articuloService.detalle(id).subscribe(
      data => {
         this.articulo = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
