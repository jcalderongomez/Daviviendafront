export interface IDataProducto {
    isExitoso: boolean;
    resultado: Producto[];
    mensaje:   string;
}

export interface Producto {
    id:          number;
    nombre:      string;
    precio:      number;
    stock:       number;
    proveedorId: number;
}
