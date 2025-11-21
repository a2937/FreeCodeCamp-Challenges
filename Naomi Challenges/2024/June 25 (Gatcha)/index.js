
/**
 * 
 * @param  {...{name: string, odds: string}} rewards 
 */
function likelyOdds(...rewards) {
  rewards.forEach(reward => reward.odds = eval(reward.odds.split(":").join("/")));
  console.log(rewards);
}