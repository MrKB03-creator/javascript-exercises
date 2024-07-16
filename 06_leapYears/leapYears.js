const leapYears = function(year) {
    console.log(year%100)
    if(year%100 > 0 && year%4 === 0) {
        console.log(true);
        return true;
    } else {
        if(year%400 === 0) {
            console.log(true);
            return true;
        }
        console.log(false);
        return false;
    }
};



leapYears(34992)
// Do not edit below this line
module.exports = leapYears;
