class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    obtenerPropiedades(): void {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
    }

    alinearTitulo(ubicacion: 'centrado' | 'derecha' | 'izquierda'): void {
        console.log(`El título se alineará a la ${ubicacion}`);
    }

    imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
    }
}

const cabecera = new CabeceraPagina('Mi Página', 'Rojo', 'Arial');
cabecera.obtenerPropiedades();
cabecera.alinearTitulo('centrado');
cabecera.imprimirPropiedades();
