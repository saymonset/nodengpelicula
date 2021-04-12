
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