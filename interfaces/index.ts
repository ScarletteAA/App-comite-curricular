export interface Sede {
  id: string;
  name: string;
  facultades: Facultad[];
}

export interface Facultad {
  id: string;
  name: string;
  carreras: carreras_facultad[];
  historiales: Historial[];
}

export interface carreras_facultad {
  id: string;
  carrera: Carrera;
  facultad: Facultad;
}

export interface Carrera {
  id: string;
  codigo_carrera: string;
  name: string;
  asesora: Asesora;
  fechaInicio: string;
  comite: Boolean;
  asignaturas_claves: Asignaturas_claves[];
  fases: Fases_carrera[];
  bitacora_anual: Bitacora_anual[];
  historico: Historico;
}

export interface Asignaturas_claves {
  id: string;
  carrera: Carrera;
  asignatura: Asignatura;
}

export interface Fases_carrera {
  id: string;
  carrera: Carrera;
  seguimiento: Seguimiento;
  evaluacion: Evaluacion;
}

export interface Seguimiento {
  id: string;
  nombre_fase: string;
}

export interface Evaluacion {
  id: string;
  nombre_fase: string;
}

export interface Bitacora_anual {
  id: string;
  carrera: Carrera;
  year: string;
  bitacora_mensual: Bitacora_mensual[];
  asignaturas_criticas: Asignaturas_criticas[];
}

export interface Bitacora_mensual {
  id: string;
  mes: string;
  n_sesiones_planificadas: number;
  n_sesiones_realizadas: number;
  comentarios: string;
}

export interface Asignaturas_criticas {
  id: string;
  asignatura: Asignatura;
}

export interface Historico {
  id: String;
  ultimo_rediseno: String;
  ultimo_ajuste_mayor: String;
  ultimo_ajuste_menor: String;
  fecha_resolucion_dgpre: String;
  administradora_dgpre: String;
  anos_ultimo_ajuste: number;
  numero_redisenos: number;
  carrera: Carrera;
  asesora: Asesora;
  observaciones: String;
}

export interface Asesora {
  id: string;
  name: string;
  email: string;
  password: string;
  carreras: Carrera[];
  historiales: Historial[];
}

export interface Historial {
  id: string;
  fecha: string;
  asesora: Asesora;
  facultad: Facultad;
  sede: Sede;
}

export interface Asignatura {
  id: string;
  name: string;
}

export interface ProfileData {
  name: string;
  email: string;
}
