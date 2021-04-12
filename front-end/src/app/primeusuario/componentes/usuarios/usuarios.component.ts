import { Component, Input, OnInit } from '@angular/core';
import { MessageService, SortEvent } from 'primeng/api';
import { Usuario } from '../../interfaces/interface';
 
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ],
  providers: [MessageService]
})
export class UsuariosComponent implements OnInit {
  @Input("usuarios") usuarios : Usuario[] = [];


  selectedProducts3: Usuario[] = [];

  selectedPro3: Usuario = {};


  constructor( private messageService: MessageService) { }

  ngOnInit(): void {
  }

  selectProduct(usuario: Usuario) {
    this.messageService.add({severity:'info', summary:'Usuario Selected', detail: usuario.name});
}

onRowSelect(event:any) {
  console.log(event)
    this.messageService.add({severity:'info', summary:'Usuario Selected', detail: event.data.name});
}

onRowUnselect(event:any) {
  console.log(event)
    this.messageService.add({severity:'info', summary:'Usuario Unselected',  detail: event.data.name});
}

customSort(event!: SortEvent) {
  event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
          result = -1;
      else if (value1 != null && value2 == null)
          result = 1;
      else if (value1 == null && value2 == null)
          result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
          result = value1.localeCompare(value2);
      else
          result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order * result);
  });
}

}
