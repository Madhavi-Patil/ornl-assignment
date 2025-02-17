// This function was created to return a new "cleaned-up" string with any non-numeric characters
// removed. For example:
// an input of: "7-623" should return: "7623"
// and an input of: "..2965a" should return "2965"
function getDigits(inputString){
   return(inputString.replace(/[^0-9]/g,''));
}

// This function was created to return a new list with the
// same elements in the same order, but removing duplicates and without changing the original list.
// All elements are of the same type in the Original list.
function uniqueItems(inputItems){
    
    var seen = {};
    var out = [];
    var len = inputItems.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = inputItems[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
   
  return out;
}


// This function was created to return a list
// of specialty names, without duplicates, that are represented by 
// the given IDs (after being "cleaned up" by the process from getDigits()).
// Note: there are no duplicates in the list of specialties: no ID will appear for multiple
// specialty areas.
function getUniqueSpecialties(ids, specialities){

    // 1. Make sure list[ids] not Empty
    if(ids == null || specialities == null)
    {
        return "";
    }

    // 2. Extract numeric keys/ ids
    var numericIds =[];
    ids.forEach(element => {
        numericIds.push(getDigits(element));
    }); 

    // 3. Get list of unique ids / exclude duplicates from ids
    var uniqueIds = uniqueItems(numericIds);
    
    // 4. Find respective Speciality for each id
    var listOfSpecialities = [];
    uniqueIds.forEach(element => {
        // console.log("Element: " + element);
        const potential = specialities.find(([key]) => key.toString() === element);
        if(potential) { listOfSpecialities.push(potential[1]);};
    });
    return(listOfSpecialities);
    
}

module.exports = { getDigits, uniqueItems, getUniqueSpecialties };
