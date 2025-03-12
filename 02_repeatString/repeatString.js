const repeatString = function(str, num) {
    let result= "";
    if (num<0){
        result="ERROR"
    };
for (let i=0; i<num; i++){

    result +=str;
    
};
return result;
}; 
repeatString("hey", 3)
// Do not edit below this line
module.exports = repeatString;
// npm test repeatString.spec.js