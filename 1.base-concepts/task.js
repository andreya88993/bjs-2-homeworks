"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
    if (d > 0) {
      let r1 = (-b + Math.sqrt(d) )/(2*a);
      let r2 = (-b - Math.sqrt(d) )/(2*a);
      arr.push(r1, r2);
    } else if (d === 0) {
      let r3 = -b/(2*a);
      arr.push(r3);
    }
  return arr;
}

console.log(solveEquation(1, 2, 3));

console.log(solveEquation(2, 5, 4));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let yearlyPerc = percent / 100;
  let monthlyPerc = 1 * yearlyPerc / 12;
  let bodyCredit  = amount - contribution;
  let monthlyLoanFee = bodyCredit * (monthlyPerc + (monthlyPerc / (((1 + monthlyPerc) ** countMonths) - 1)));
  

    let rez = monthlyLoanFee * countMonths - contribution + contribution;
   return  parseFloat(rez.toFixed(2));
     
}