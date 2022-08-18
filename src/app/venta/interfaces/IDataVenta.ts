export interface IDataVenta {
    isExitoso: boolean;
    resultado: Venta[];
    mensaje:   string;
}

export interface Venta {
    id:         number;
    fechaVenta: string;
    clienteId:  number;
    cliente:    Cliente;
    productoId: number;
    producto:   Producto;
    descuento:  number;
    total:      number;
}

export interface Cliente {
    id:        number;
    cedula:    string;
    nombre:    string;
    apellido:  string;
    direccion: string;
    telefono:  string;
}

export interface Producto {
    id:          number;
    nombre:      string;
    precio:      number;
    stock:       number;
    proveedorId: number;
    proveedor:   null;
}
