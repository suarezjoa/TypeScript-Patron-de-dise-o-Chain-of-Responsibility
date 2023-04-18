import { Observador } from './Observador';

export class Documento {
    private tipo: string;
    private contenido: string;
    private observadores: Observador[] = [];
  
    constructor(tipo: string, contenido: string) {
      this.tipo = tipo;
      this.contenido = contenido;
    }
  
    getTipo(): string {
      return this.tipo;
    }
    getContenido(): string {
        return this.contenido;
    }
    setContenido(contenido: string): void {
      this.contenido = contenido;
      this.notificarObservadores();
    }
  
    adjuntarObservador(obs: Observador): void {
      this.observadores.push(obs);
    }
  
    desadjuntarObservador(obs: Observador): void {
      const index = this.observadores.indexOf(obs);
      if (index !== -1) {
        this.observadores.splice(index, 1);
      }
    }
  
    notificarObservadores(): string {
        let mensaje: string = '';
        for (const obs of this.observadores) {
          mensaje += obs.actualizar(this) + '\n';
        }
        return mensaje;
      }
  }