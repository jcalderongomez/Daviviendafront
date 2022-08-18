export interface IDataProveedor {
    isExitoso: boolean;
    resultado: Proveedor[];
    mensaje:   string;
}

export interface Proveedor {
    id:       number;
    rut:      string;
    nombre:   string;
    telefono: string;
    pagina:   string;
}
