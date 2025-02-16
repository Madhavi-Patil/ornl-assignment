
function getDigits(inputString){
    //console.log('inputString' + inputString);
   return(inputString.replace(/[^0-9]/g,''));
}

function uniqueItems(inputItems){
    /* var uniq = [ ...new Set(inputItems) ];
    console.log(' org list:' + inputItems + ' new list:' + uniq );
    return uniq; */
   
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

function getUniqueSpecialties(ids, specialities){

    // 1. Make sure list[ids] not Empty
    if(ids == null || specialities == null)
    {
        return "";
    }
   // console.log("Ids: " + ids);

    // 2. Extract numeric keys/ ids
    var numericIds =[];
    ids.forEach(element => {
        numericIds.push(getDigits(element));
    }); 
    //console.log("Numeric ids: " + numericIds);

    // 3. Get list of unique ids / exclude duplicates from ids
    var uniqueIds = uniqueItems(numericIds);
    // console.log ("Unique ids: " + uniqueIds);
    // console.log("Spe " + specialities.length);
    
    // 4. Find respective Speciality for each id
    var listOfSpecialities = [];
    uniqueIds.forEach(element => {
        // console.log("Element: " + element);
        const potential = specialities.find(([key]) => key.toString() === element);
        if(potential) { listOfSpecialities.push(potential[1]);};
    });
    // console.log(listOfSpecialities);
    return(listOfSpecialities);
    
}

module.exports = { getDigits, uniqueItems, getUniqueSpecialties };