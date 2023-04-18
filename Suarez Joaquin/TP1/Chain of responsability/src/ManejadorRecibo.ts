import { Handler } from "./Handler";
import { Documento } from "./Documento";

export class ManejadorRecibo extends Handler{

    protected puedeProcesar(documento: Documento): boolean {
        return documento.tipo === 'recibo';
      }
      protected procesar(): string { 
        return "documento procesado por el manejador de recibo";
    }
}