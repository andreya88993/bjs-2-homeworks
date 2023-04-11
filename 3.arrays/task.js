
    function compareArrays(arr1, arr2) {
        return   arr1.length === arr2.length && arr1.every((element, i) => element === arr2[i]);
    
}

function getUsersNamesInAgeRange(users, gender) {
    let genders = users.filter(i => i.gender === gender); // фильтруюсь по значению gender
  
  let allAge = genders.map(g => g.age); // формирую новый массив по age
 let sumAllAge = allAge.reduce((f, rez) => rez + f, 0);// вычисляю сумму возраста
  
  // return sumAllAge / allAge.length; // рассчитываю средний возраст
  
  if (users.length === 0) {
     return 0;
    }
  for (i = 0; i < users.length; i++) {
    
    if (users[i].gender !== gender) {
    0;
    } else {
      return sumAllAge / allAge.length;
    }
  }
  return 0;
 
 
}