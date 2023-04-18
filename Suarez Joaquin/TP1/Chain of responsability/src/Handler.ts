 import { Documento } from "./Documento";
  import { IHandler } from "./IHandler";
 export abstract class Handler implements IHandler  {

    siguienteEnLaCadena: Handler;

    protected abstract puedeProcesar(documento: Documento): boolean;
    protected abstract procesar(documento: Documento): string;;

    setSiguiente(manejador: Handler): void {
      this.siguienteEnLaCadena = manejador;
    }

    manejarDocumento(documento: Documento): string {
      if (this.puedeProcesar(documento)) {
        return this.procesar(documento);
      } else if (this.siguienteEnLaCadena) {
        return this.siguienteEnLaCadena.manejarDocumento(documento);
      } else {
        return "Ningún manejador puede procesar"
      }
    }
  }