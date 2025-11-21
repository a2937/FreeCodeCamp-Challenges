/**
 * 
 * @param {Number} distance 
 * @param {String} time 
 */
function pace(distance, time) {
  const minutes = parseInt(time.split(":")[0]);
  const seconds = parseInt(time.split(":")[1]);
  const fullSeconds = (minutes * 60) + seconds;

  const kilometersPerMinute = fullSeconds / distance;

  const singleMinutes = Math.floor(kilometersPerMinute / 60);

  const singleSeconds = Math.floor(kilometersPerMinute % 60);

  return singleMinutes.toString().padStart(2, "0") + ":" + singleSeconds.toString().padStart(2, "0");
}

console.log(pace(2, "30:00")); 