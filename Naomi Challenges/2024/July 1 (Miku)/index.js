
/**
 * @returns {Number}
 */
const payRate =
{
  "close friend": 25,
  'friend': 50,
  "acquaintance": 100
}


/**
 * @param {(string | number)[][]} orders
 */
function calculatePay(orders) {
  let totalPay = 0;
  orders.map(function (order) {
    if (typeof order[0] === "number") {
      let hours = order[0];
      let orderer = order[1].toString().toLowerCase();
      let pay = 0;
      if (payRate[orderer] !== null) {
        pay = payRate[orderer];
      }
      else {
        pay = 125;
      }
      totalPay += (pay * hours);
    }
  });
  return totalPay;
}

let pay = calculatePay([[10, 'Close Friend'], [3, 'Acquaintance'], [7, 'Lead from web'], [6, 'Friend'], [2, 'It came from Facebook']]);
console.log(pay); 