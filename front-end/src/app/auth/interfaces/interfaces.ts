export interface AuthResponse {
  ok?: boolean;
  uid?: string;
  name?: string;
  token?: string;
  email?: string;
  msg?: string;
}


export interface Usuario {
    uid?: string;
    name?: string;
    email?: string;
    password?:string;
  }

 export interface RootUsuarios {
    ok: boolean;
    usuarios: Usuario[];
  }
  
   