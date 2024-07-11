export default class Persona{
    constructor(nombre,ingreso){
        this.nombre=nombre;
        this.ingreso=ingreso;
    }

    set nombre(n){

        this._nombre=n;
    }

    get nombre(){
        return this._nombre;
    }
    set ingreso(ing){

        this._ingreso=+ing;
    }

    get ingreso(){
        return this._ingreso;
    }


}