
export interface Sede {
    id: string
    name: string
    facultades: Facultad[]
}

export interface Facultad {
    id: string
    name: string
    carreras: Carrera[]
    historiales: Historial[]
}

export interface Carrera {
    id: string
    name: string
    asesora: Asesora
    asiganaturas: Asignatura[]
}

export interface Asesora {
    id: string
    name: string
    email: string
    password: string
    carreras: Carrera[]
    historiales: Historial[]
}

export interface Historial {
    id: string
    fecha: string
    asesora: Asesora
    facultad: Facultad
    sede: Sede
}

export interface Asignatura {
    id: string
    name: string
    carrera: Carrera
}

export interface ProfileData {
    name: string
    email: string
}