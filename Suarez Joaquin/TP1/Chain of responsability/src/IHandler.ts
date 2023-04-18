import { Handler  } from "./Handler";
import { Documento  }  from "./Documento"

export interface IHandler{
    setSiguiente(manejador: Handler): void;
    manejarDocumento(documento: Documento): string;
}