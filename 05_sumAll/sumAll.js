const sumAll = function(num1,num2) {
    let sum = 0;

    switch(true) {
        case(num1 < 0 || num2 < 0):
            return 'ERROR';

        case(num1 < num2 && typeof(num1) === 'number' && typeof(num2) === 'number'):
            for(i = num1; i <= num2;i++) {
                sum += i;
            }
            return sum;
        case(num1 > num2 && typeof(num1) === 'number' && typeof(num2) === 'number'):
            for(i = num2; i <= num1;i++) {
                sum += i;
            }
            return sum;

        default:
            return 'ERROR';
        }
    };


// Do not edit below this line
module.exports = sumAll;
