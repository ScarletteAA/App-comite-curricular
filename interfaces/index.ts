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
  comite: boolean;
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
  carrera: carrera_bitacora_anual;
  id_carrera: string;
  year: string;
  bitacora_mensual: Bitacora_mensual[];
  asignaturas_criticas: Asignaturas_criticas[];
}

export interface carrera_bitacora_anual {
  id: string;
  codigo_carrera: string;
  name: string;
  asesoraId: string;
  fechaInicio: string;
  comite: boolean;
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
  id_bitacora_anual: string;
  asignatura: Asignatura;
}

export interface Historico {
  id: String;
  ultimo_rediseno: string;
  ultimo_ajuste_mayor: string;
  ultimo_ajuste_menor: string;
  fecha_resolucion_dgpre: string;
  administradora_dgpre: string;
  anos_ultimo_ajuste: number;
  numero_redisenos: number;
  carrera: Carrera;
  asesora: Asesora;
  observaciones: string;
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
  descripcion: string;
  id_carrera: string;
}

export interface Asignatura {
  id: string;
  name: string;
}

export interface ProfileData {
  name: string;
  email: string;
}
