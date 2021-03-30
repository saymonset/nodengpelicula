 
 
export interface IMovies {
  ok?: boolean;
  movies?: IMovie[];
}

export interface IMovie {
  _id?: string;
  title?: string;
  description?: string;
  __v?: number;
}


export interface Resp {
  ok: boolean;
  msg: string;
}