
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
  return array.slice(1);
}
   

function removeElementFromBeginningOfArray(array)', () => {
    it('removes the first element from the array', () => {
      expect(removeElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })

    it('does not alter the original array', () => {
      const array = [1, 2, 3];

      removeElementFromBeginningOfArray(array);

      expect(array).to.eql([1, 2, 3]);
    })
  })

  describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
    it('returns the array with the last element removed', () => {
      expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromEndOfArray(array);
      expect(array).to.eql([1, 2]);
    })
  })
  
  describe('removeElementFromEndOfArray(array)', () => {
    it('removes the last element from the array', () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('does not alter the original array', () => {
      const array = [1, 2, 3];
      removeElementFromEndOfArray(array);
      expect(array).to.eql([1, 2, 3]);
    })
  })
})