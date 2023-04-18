
import { Documento } from "../src/Documento";
import { Handler } from "../src/Handler";
import { ManejadorFactura } from "../src/ManejadorFactura";
import { ManejadorContrato } from "../src/ManejadorContrato";
import { ManejadorRecibo } from "../src/ManejadorRecibo";

describe('Prueba unitaria para un manejador', () => {
  it('debe probar que el manejador facura acpete y lea el documento', async () => {

    const factura =  new Documento ("factura","Contenido Fact");

    const contrato = new Documento("contrato","Contro contenido");
    const recibo = new Documento ("recibo","Contenido Recibo");
    const otroDocumento = new Documento ("otroDocumento","Contenido Otro");

    const manejadorFactura = new ManejadorFactura();
    const manejadorContrato = new ManejadorContrato();
    const manejadorRecibo = new ManejadorRecibo();

    manejadorFactura.setSiguiente(manejadorContrato);
    manejadorContrato.setSiguiente(manejadorRecibo);

    
    expect("documento procesado por el manejador de factura").toEqual(manejadorFactura.manejarDocumento(factura));
    });
  it('debe probar que el manejador contrato acpete y lea el documento', async () => {

      const factura =  new Documento ("factura","Contenido Fact");
  
      const contrato = new Documento("contrato","Contro contenido");
      const recibo = new Documento ("recibo","Contenido Recibo");
      const otroDocumento = new Documento ("otroDocumento","Contenido Otro");
  
      const manejadorFactura = new ManejadorFactura();
      const manejadorContrato = new ManejadorContrato();
      const manejadorRecibo = new ManejadorRecibo();
  
      manejadorFactura.setSiguiente(manejadorContrato);
      manejadorContrato.setSiguiente(manejadorRecibo);
  
      
      expect("documento procesado por el manejador de contrato").toEqual(manejadorFactura.manejarDocumento(contrato));
      });
      it('debe probar que el manejador recibo acpete y lea el documento', async () => {

        const factura =  new Documento ("factura","Contenido Fact");
    
        const contrato = new Documento("contrato","Contro contenido");
        const recibo = new Documento ("recibo","Contenido Recibo");
        const otroDocumento = new Documento ("otroDocumento","Contenido Otro");
    
        const manejadorFactura = new ManejadorFactura();
        const manejadorContrato = new ManejadorContrato();
        const manejadorRecibo = new ManejadorRecibo();
    
        manejadorFactura.setSiguiente(manejadorContrato);
        manejadorContrato.setSiguiente(manejadorRecibo);
    
        
        expect("documento procesado por el manejador de recibo").toEqual(manejadorFactura.manejarDocumento(recibo));
        });
      it('se debe probar que el manejador recibo no acepta el documento', async () => {

          const factura =  new Documento ("factura","Contenido Fact");
      
          const contrato = new Documento("contrato","Contro contenido");
          const recibo = new Documento ("recibo","Contenido Recibo");
          const otroDocumento = new Documento ("otroDocumento","Contenido Otro");
      
          const manejadorFactura = new ManejadorFactura();
          const manejadorContrato = new ManejadorContrato();
          const manejadorRecibo = new ManejadorRecibo();
      
          manejadorFactura.setSiguiente(manejadorContrato);
          manejadorContrato.setSiguiente(manejadorRecibo);
      
          
          expect("Ningún manejador puede procesar").toEqual(manejadorFactura.manejarDocumento(otroDocumento));
          });
});