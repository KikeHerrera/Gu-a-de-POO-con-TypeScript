class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return a / b;
    }

    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    factorial(n: number): number {
        if (n === 0) return 1;
        return n * this.factorial(n - 1);
    }
}

const calculadora = new Calculadora();
console.log(calculadora.sumar(5, 3));
console.log(calculadora.factorial(5));
