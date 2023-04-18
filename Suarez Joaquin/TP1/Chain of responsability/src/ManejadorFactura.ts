import { Handler } from "./Handler"
import { Documento } from "./Documento";


export class ManejadorFactura extends Handler {

    protected puedeProcesar(documento: Documento): boolean {
          return documento.tipo === 'factura';
    }  
    protected procesar(): string { 
        return "documento procesado por el manejador de factura";
    }
}
