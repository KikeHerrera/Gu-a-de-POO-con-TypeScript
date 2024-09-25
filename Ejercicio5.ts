abstract class Persona {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} es menor de edad.`);
        }
    }

    abstract mostrarDatos(): void;
}

class Empleado extends Persona {
    sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): void {
        console.log(`El sueldo de ${this.nombre} es ${this.sueldo}`);
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}, Sueldo: ${this.sueldo}`);
    }
}

const empleado = new Empleado('Ana', 'González', 'Calle Falsa 123', '123456789', 25, 1200);
empleado.esMayorDeEdad();
empleado.imprimirSueldo();
empleado.mostrarDatos();
