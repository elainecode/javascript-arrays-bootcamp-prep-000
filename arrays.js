
var chocolateBars = [ "snickers", "hundred grand", "kitkat",  "skittles"]

function addElementToBeginningOfArray(array, element){
  return array.unshift(element);
}


 function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
   
 }
    

function addElementToEndOfArray(array, element){
  return array.push(element);
} 
    
    
function destructivelyAddElementToEndOfArray(array, element)  {
  return array.push(element);
}

  function accessElementInArray(array, index) {
    return array[index];
  }
  
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.unshift();
}
   

function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array;
} 


function destructivelyRemoveElementFromEndOfArray(){}
  
  