import { Documento } from "../src/Documento";
import { Impresora } from "../src/Impresora";

describe('Patrón Observer', () => {
  it('debería actualizar la impresora cuando el contenido del documento cambie', () => {
    const doc = new Documento('Factura', 'Contenido de factura');
    const impresora1 = new Impresora('Impresora 1');
    const impresora2 = new Impresora('Impresora 2');
    doc.adjuntarObservador(impresora1);
    doc.adjuntarObservador(impresora2);

    doc.setContenido('Contenido actualizado');

    const mensajeEsperado = `impresora: Impresora 1 Notificacion de documento tipo Factura - Contenido actualizado`;
    expect(doc.notificarObservadores()).toContain(mensajeEsperado);
  });
});