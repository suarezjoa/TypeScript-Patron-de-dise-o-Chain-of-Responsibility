import { Handler } from "./Handler"
import { Documento } from "./Documento";


export interface interfaceHandler {
    setSiguiente(n:Handler):void;
    manejarDocumento(documento: Documento): string;
}