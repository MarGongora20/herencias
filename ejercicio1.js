class Empleado{

    constructor(nombre,cargo,salario){
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;
    }

    presentarse(){
        console.log("Mucho gusto soy "+this.nombre+" y mi cargo es "+this.cargo);        
    }

    calcularSalarioAnual(){
        let salarioAnual = this.salario * 12;
        console.log("Emplead@ "+this.nombre+" su salario anual es de: "+salarioAnual);
    }

    desactivar(){
        this.activo = false;
        console.log("El empleado "+this.nombre+" fue desactivado");
    }

    info(){
        console.log(`
            Nombre: ${this.nombre}
            Cargo: ${this.cargo}
            Salario mensual: ${this.salario}
            Activo: ${this.activo}`);
    }
}

let empleado1 = new Empleado("Carlos","Programador Junior",2700000)
let empleado2 = new Empleado("Juan","Asistente",2000000)
let empleado3 = new Empleado("Maria","Desarrolladora Senior",8000000)

empleado1.presentarse();
empleado3.calcularSalarioAnual();

empleado2.desactivar();
empleado2.info();


class Lider extends Empleado{

    constructor(nombre,salario,equipo){
        this.nombre = nombre;
        this.salario = salario;
        this.equipo = equipo;
        this.cargo = "Lider de equipo";
    }

    presentarEquipo(){
        let nombresEquipo = [];
    }

    agregarMiembro(nombre){
        nombresEquipo.push(this.nombre);
    }

    info(){

    }
}
