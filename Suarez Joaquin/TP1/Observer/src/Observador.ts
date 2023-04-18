import { Documento } from "./Documento"

export interface Observador {
    actualizar(doc: Documento): string | undefined;
  }