let day = new Date;
 
const anioInicio = 2016;
const anioFin = 2018;

let arrayDias = [];

for (let i = anioInicio;  i <= anioFin; i++){

  for (let j = 0; j<12 ; j++){
        
        day.setYear(i);
        day.setMonth(j);
        day.setDate(1);


        // 14/11/2011 -> lunes

        const isDay = ['domingo', 
        'lunes', 
        'martes', 
        'miercoles', 
        'jueves', 
        'viernes', 
        'sabado']
        [day.getDay()];

        if (isDay == 'domingo'){
           
            arrayDias.push(isDay);
            
        }
  }
   
}

console.log(arrayDias.length);
