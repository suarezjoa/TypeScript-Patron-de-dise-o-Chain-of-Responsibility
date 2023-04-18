import { Handler } from "./Handler"
import { Documento } from "./Documento";


export class ManejadorContrato extends Handler {



    protected puedeProcesar(documento: Documento): boolean {
        return documento.tipo === 'contrato';
    }
      
    protected procesar(): string { 
        return "documento procesado por el manejador de contrato";
    }
}
