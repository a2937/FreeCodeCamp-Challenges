/**
 * 
 * @param {Number} startingCandles 
 * @param {Number} leftoversToCandle 
 */
function candles(startingCandles, leftoversToCandle) {
  let candlesBurned = startingCandles;
  let currentLeftovers = candlesBurned % leftoversToCandle;
  let newCandles = Math.round(candlesBurned / leftoversToCandle);
  candlesBurned += newCandles;
  let leftoverCandleFragments = Math.round(newCandles % leftoversToCandle) + currentLeftovers;
  while (Math.round(leftoverCandleFragments / leftoversToCandle) > 0) {
    candlesBurned += Math.round(leftoverCandleFragments / leftoversToCandle);
    leftoverCandleFragments = (leftoverCandleFragments % leftoversToCandle) + currentLeftovers;
  }
  return candlesBurned;
}

console.log(candles(7, 3)); 