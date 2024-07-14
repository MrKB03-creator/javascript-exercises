const removeFromArray = function(array, num, num2, num3, num4) {
    const arr = array;
    let newArr = [];

    for(let j = 0 ; j < arr.length; j++) {
        if(arr[j] !== num && arr[j] !== num2 && arr[j] !== num3 && arr[j] != num4) {
            newArr.push(arr[j]);
        }
    }
    return newArr;
};


// Do not edit below this line
module.exports = removeFromArray;
