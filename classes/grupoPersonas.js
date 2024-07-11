export default class GrupoPersonas{
    constructor(){
        this.contPersonas=0;
        this.menorIngreso=200;
        this.acuIngreso=0;
    }

    procesarPersona(persona){
        this.contPersonas++
        this.acuIngreso+=persona.ingreso

        if(persona.ingreso<this.menorIngreso){
            this.menorIngreso=persona.ingreso
        }

    }


    promedioIngresos(){
        return (this.acuIngreso/this.contPersonas).toFixed(0)
    }


}