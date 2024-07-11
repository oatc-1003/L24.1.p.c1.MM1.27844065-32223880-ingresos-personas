// 7. INGRESOS PERSONAS
// Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso
// menor y el ingreso promedio.
// Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150),
// (José, 135), (Carlos, 160), (Pedro, 75)
// Monto del ingreso menor: 75$
// Ingreso promedio:130 


import GrupoPersonas from "./classes/grupoPersonas.js";
import Persona from "./classes/persona.js";

let _persona1=new Persona("Mary",150);
let _persona2=new Persona("Jose",135);
let _persona3=new Persona("Carlos",160);
let _persona4=new Persona("Pedro",75);

let _grupo=new GrupoPersonas()

_grupo.procesarPersona(_persona1)
_grupo.procesarPersona(_persona2)
_grupo.procesarPersona(_persona3)
_grupo.procesarPersona(_persona4)

document.body.innerHTML=`
<br>
Monto del ingreso menor: ${_grupo.menorIngreso}$
<br>
Ingreso promedio: ${_grupo.promedioIngresos()}


`