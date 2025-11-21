/**
 * 
 * @param {Date} alarm 
 * @returns {string} 
 */
function calculateAlarmRemain(alarm) {
  var currentTime = new Date();
  if (alarm.getTime() > currentTime.getTime()) {
    return "Still sleeping";
  }
  var passedTime = currentTime.getTime() - alarm.getTime();
  var hours = Math.floor(((passedTime / 1000) / 60) / 60);
  var minutes = Math.floor(((passedTime / 1000) / 60) % 60);
  return `${hours} hours and ${minutes} minutes of sleep`;
}

var currentDate = new Date();
var time = calculateAlarmRemain(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 3, 24, 0))
console.log(time);