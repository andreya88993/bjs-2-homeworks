
    function compareArrays(arr1, arr2) {
        return   arr1.length === arr2.length && arr1.every((element, i) => element === arr2[i]);
    
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(user => user.gender === gender).map(ages => ages.age).reduce((acc, age, index, arr) => {if (index === arr.length - 1) {return (acc + age) / arr.length;
} else {
   return acc + age;
}
}, 0);
}

