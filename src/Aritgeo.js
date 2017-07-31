'use strict';

module.exports = {


	validation: function (series){
  
    for (let number=0; number<series.length; number++){
        if (typeof series[number] === 'number'){
          let value = true;
        }
        else {
            let value = false;
            break;
        }
    }
   return this.value;

},

	
     aritGeo: function(series){
    	
        if(series.toString() === "" ){
            return '0';
    }
    
    if (this.validation(series)){
        if(this.isArit(series) || this.isGeo(series)){
           if (this.isGeo(series)){
             return 'Geometric';
           }
           if (this.isArit(series)){
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



 isGeo: function(series){
    let multiple = series[1]/series[0];
    for (let number=0; number<series.length-1; number++){
      if (series[number+1]/series[number] === this.multiple){
           let  value = true;
        }
        else{
            let value =false;
            break;
    }
   }
   return this.value;
},

  isArit: function(series){
    let diff = series[1]-series[0];
    for (let number=0; number<series.length-1; number++){
        if (series[number+1] - series[number] === this.diff){
            let value = true;
        }
        else{
            let value = false;
            break;
    }
   }
   return this.value;
}
}