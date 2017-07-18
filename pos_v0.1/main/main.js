'use strict'
function workShop(num) {
    let numTest='1234';
    let number=new Object();
    number.A=0;
    number.B=0;
    for (let i=0;i<num.length;i++){
        if(numTest[i]===num[i]){
            number.A++;
        }
    }
    for(let i=0;i<num.length;i++){
        for (let j=0;j<numTest.length;j++){
            if(numTest[i]===num[j]&&i!==j){
                number.B++;
            }
        }
    }
    return `${number.A}A${number.B}B`;

}
console.log(workShop('5678'));
console.log(workShop('5671'));
console.log(workShop('5621'));
console.log(workShop('5321'));
console.log(workShop('4321'));
console.log(workShop('1567'));
console.log(workShop('1562'));
console.log(workShop('1523'));
console.log(workShop('1423'));
console.log(workShop('1278'));
console.log(workShop('1253'));
console.log(workShop('1243'));
console.log(workShop('1230'));
console.log(workShop('1234'));
