'use strict';

module.exports = {

	
     aritGeo: (series) =>{
    	let value;
        let multiple=0;
        let diff=0;
        if(series.toString() === "" ){
            return '0';
    }
    
    if (validation(series)){
        if(isArit(series) || isGeo(series)){
           if (isGeo(series)){
             return 'Geometric';
           }
           if (isArit(series)){
             return 'Arithmetic';
           }
        }
       else{
         return '-1';
       }
    }
    else{
      return 'Array of numbers is required';
    }
 
},


   validation: (series) =>{
  
    for (let number=0; number<series.length; number++){
        if (typeof series[number] === 'number'){
          value = true;
        }
        else {
            value = false;
            break;
        }
    }
   return value;

},



 isGeo: (series) =>{
    multiple = series[1]/series[0];
    for (let number=0; number<series.length-1; number++){
      if (series[number+1]/series[number] === multiple){
            value = true;
        }
        else{
            value =false;
            break;
    }
   }
   return value;
},

  isArit: (series) =>{
    diff = series[1]-series[0];
    for (let number=0; number<series.length-1; number++){
        if (series[number+1] - series[number] === diff){
            value = true;
        }
        else{
            value = false;
            break;
    }
   }
   return value;
}
}