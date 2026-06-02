class Empleado{

    constructor(nombre,salario,cargo){
        this.nombre = nombre;
        this.salario = salario;
        this.cargo = cargo;
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
            Activo: ${this.activo}
            `);
    }
}

let empleado1 = new Empleado("Carlos",2700000,"Programador Junior")
let empleado2 = new Empleado("Juan",2000000,"Asistente")
let empleado3 = new Empleado("Maria",8000000,"Desarrolladora Senior")

empleado1.presentarse();
empleado3.calcularSalarioAnual();

empleado2.desactivar();
empleado2.info();


class Lider extends Empleado{

    constructor(nombre,salario,equipo){
        super(nombre,salario);
        this.equipo = equipo;
        this.cargo = "Lider de equipo";
    }

    presentarEquipo(){
        return this.equipo.join(", ")  
    }

    agregarMiembro(nombreEmpleado){
        this.equipo.push(nombreEmpleado);
        console.log("Se agrego a "+nombreEmpleado+" como nuev@ miembro del equipo.");
    }

    info(){
        super.info()
        console.log("En el equipo actualmente hay "+this.equipo.length+" miembros.");        
    }
}

//Empleados:
const lider1 = new Lider("Sebastian",10000000,["Maria","Juan","Carlos"])
const lider2 = new Lider("Eduardo",12500000,["Camilo","Andrea","Erika"])

lider1.calcularSalarioAnual();
lider2.desactivar();
lider2.info();

console.log(lider1.presentarEquipo());
lider1.agregarMiembro("Jessica");
console.log(lider1.presentarEquipo());
