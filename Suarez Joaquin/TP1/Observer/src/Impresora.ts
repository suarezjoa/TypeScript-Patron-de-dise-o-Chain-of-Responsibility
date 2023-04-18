import { Observador } from './Observador';
import { Documento } from './Documento';

export class Impresora implements Observador {
    private nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    actualizar(doc: Documento): string {
        return `impresora: ${this.nombre} Notificacion de documento tipo ${doc.getTipo()} - ${doc.getContenido()}`;
    }

  }