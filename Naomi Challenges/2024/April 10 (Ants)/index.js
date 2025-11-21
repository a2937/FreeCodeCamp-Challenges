

/**
 * 
 * @param {Number} days 
 * @returns {{ants: Number,crumbs: Number}}
 */
function shouldCleanDesk(days) {
  const startingAnts = 50;
  const startingCrumbs = 100;
  if (days > 0 && days <= 30) {

    let ants = startingAnts * (2 ** days);


    let crumbs = startingCrumbs * 3;

    // Crumbs ate that day
    // Day 0 - Ants : 50 ,   Crumbs Left : 100  , Crumbs Ate : 0  , Total Crumbs : 100 
    // Day 1 - Ants : 100 ,  Crumbs Left : 200 , Crumbs Ate : 100 , Total Crumbs : 300 
    // Day 2 - Ants : 200 , Crumbs Left : 400 , Crumbs Ate  : 200 , Total Crumbs : 600 
    // Day 5 - Ants : 1600 , Crumbs Left : 3200 , Crumbs Ate : ???



    return { ants, crumbs };
  }
  else if (days == 0) {
    return { ants: startingAnts, crumbs: startingCrumbs };
  }
  else {
    throw new Error("Day " + days + " outside of time range (0-30)");
  }
}

console.log(shouldCleanDesk(5));