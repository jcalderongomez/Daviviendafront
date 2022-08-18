export interface IDataCliente {
    isExitoso: boolean;
    resultado: Cliente[];
    mensaje:   string;
}

export interface Cliente {
    id:        number;
    cedula:    string;
    nombre:    string;
    apellido:  string;
    direccion: string;
    telefono:  string;
}
