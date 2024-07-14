const repeatString = function(string,num) {
    let st = string;
    let num1 = num;

    if(num1 > 0){
        for(let i = 1; i < num1; i++){
            st += string;
        }
        return st;
    }
    else if(num1 == 0){
        return '';
    }
    else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
