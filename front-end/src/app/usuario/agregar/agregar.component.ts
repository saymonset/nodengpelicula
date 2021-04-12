import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Usuario } from '../../auth/interfaces/interfaces';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  
  @Input() usuario: Usuario = {};

  @Output() usuarioCreated = new EventEmitter<Usuario>();

  




    
  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

   
  


  constructor(private fb: FormBuilder,private router: Router, private usuarioService:UsuarioService) {
      this.usuario = {} as Usuario;
     }


  ngOnInit(): void {
  }

  
  onRegresar(){
    this.router.navigateByUrl('/usuario');
 }
  
  register(){
    const { name, email, password} = this.miFormulario.value;
     this.usuarioService.registro( name, email, password)
     .subscribe( ok =>{
       if (ok === true){
        this.usuarioCreated.emit(this.miFormulario.value);
        Swal.fire('Sucess', ok,'info')
       }else{
         //Todo Mostrar mensaje de error
         Swal.fire('Error', ok,'error')
       }
     }); 
    }
}
