class Cuenta {
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    depositar(valor: number): void {
        if (valor < 5) {
            console.log('El valor a depositar debe ser mayor a $5.00');
        } else {
            this.cantidad += valor;
            console.log(`Se ha depositado correctamente: $${valor}`);
        }
    }

    retirar(valor: number): void {
        if (valor > this.cantidad) {
            console.log('No hay suficiente dinero en la cuenta');
        } else if (valor < 5) {
            console.log('No se puede retirar una cantidad menor a $5.00');
        } else {
            this.cantidad -= valor;
            console.log(`Ha retirado $${valor}, saldo restante: $${this.cantidad}`);
        }
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}, Tipo de Cuenta: ${this.tipoCuenta}, Número de Cuenta: ${this.numeroCuenta}`);
    }
}

const cuenta = new Cuenta('Juan Pérez', 100, 'Ahorro', '1234567890');
cuenta.depositar(50);
cuenta.retirar(10);
cuenta.mostrarDatos();
