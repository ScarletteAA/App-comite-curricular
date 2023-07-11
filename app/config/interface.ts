export interface Change {
  id: string;
  type: string;
  description: string;
  date: Date;
}

export interface history {
  sede: string;
  facultad: string;
  description: string;
  date: string;
  username: string;
}

export interface Asesora {
  id: string;
  name: string;
  email: string;
  password: string;
  carreras: Carrera[];
  history: history[];
}

export interface Carrera {
  id: string;
  name: string;
  facultad: Facultad;
  asesora: Asesora;
}

export interface Facultad {
  id: string;
  name: string;
  carreras: Carrera[];
  history: history[];
}

export interface Sede {
  id: string;
  name: string;
  facultades: Facultad[];
  history: history[];
}