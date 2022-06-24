// Code your solution here
// function findMatching(arrayOfDrivers, target){
//     return arrayOfDrivers.filter((driver)=>driver.toUpperCase()===target.toUpperCase())
// }

function fuzzyMatch(collection, result){
    return collection.filter((name)=>name.substring(0,2) === result.substring(0,2))
    
       
}

function matchName(arrayOfDriversObj, res){
    return arrayOfDriversObj.filter((element)=>element['name']===res)
    
}

function findMatching(arrayOfDrivers, target){
    return arrayOfDrivers.filter((driver)=>driver.toLowerCase()===(target).toLowerCase())
}

