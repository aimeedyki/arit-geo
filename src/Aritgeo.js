'use strict';
        let value;
        let multiple=0;
        let diff=0;

function aritGeo (series){
    	
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
 
}


  function validation (series){
  
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

}



 function isGeo (series){
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
}

  function isArit (series){
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
exports.aritGeo = aritGeo;