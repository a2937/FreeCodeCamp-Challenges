
/**
 * Aries (March 21-April 19)
Taurus (April 20-May 20)
Gemini (May 21-June 20)
Cancer (June 21-July 22)
Leo (July 23-August 22)
Virgo (August 23-September 22)
Libra (September 23-October 22)
Scorpio (October 23-November 21)
Sagittarius (November 22-December 21)
Capricorn (December 22-January 19)
Aquarius (January 20 to February 18)
Pisces (February 19 to March 20)

 */


/**
 * 
 * @param {Number} day 
 * @param {Number} month 
 */
function getZodiacSign(day, month)
{
  console.log("Month: " + month); 
  console.log("Day : " + day);
  if (month == 1) {
    if (day <= 19) {
      return "Capricorn"
    }
    else {
      return "Aquarius";
    }
  }
  else if (month == 2) {
    if (day <= 18) {
      return "Aquarius";
    }
    else {
      return "Pisces";
    }
  }
  else if (month == 3) {
    if (day <= 20) {
      return "Pisces";
    }
    else {
      return "Aries";
    }
  }
  else if (month == 4) {
    if (day <= 19)
    {
      return "Aries";
    }
    else 
    {
      return "Taurus"; 
    }
  }
  else if (month == 5)
  {
    if (day <= 20)
    {
      return "Taurus"; 
    }
    else 
    {
      return "Gemini"
    }
  }
  else if (month == 6)
  {
    if (day <= 20)
    {
      return "Gemini"
    }
    else 
    {
      return "Cancer"; 
    }
  }
  else if (month == 7)
  {
    if (day <= 22)
    {
      return "Cancer"; 
    }
    else 
    {
      return "Leo"; 
      }
  }
  else if (month == 8)
  {
    if (day <= 22) {
      return "Leo"; 
    }
    else 
    {
      return "Virgo";  
    }
  }
  else if (month == 9)
  {
    if (day <= 22) {
      return "Virgo";
    }
    else 
    {
      return "Libra"; 
      }
  }
  else if (month == 10)
  {
    if (day <= 23)
    {
      return "Libra";
    }
    else 
    {
      return "Scorpio"; 
    }
  }
  else if (month == 11)
  {
    if (day <= 21)
    {
      return "Scorpio"; 
    }
    else 
    {
      return "Sagittarius"; 
      }
  }
  else if (month == 12)
  {
    if (day <= 21) {
      return "Sagittarius";
    }
    else 
    {
      return "Capricorn"; 
    }
  }
  else 
  {
    throw new Error("Months must be between (1 - 12)"); 
  }
}

/**
 * 
 * @param {Number} day 
 * @param {Number} month 
 * @returns {String}
 */
function getZodiacSignEx(day, month)
{
  let calendar = [];
  const dayFormula = (providedYear, providedMonth) => new Date(providedYear, providedMonth, 0).getDate();
  const zodiac = {
    "Capricorn": 19,
    "Aquarius": 18, 
    "Pisces": 20,
    "Aries": 19,
    "Taurus": 20,
    "Gemini": 20,
    "Cancer": 22,
    "Leo": 22, 
    "Virgo": 22,
    "Libra": 23,
    "Scorpio": 21,
    "Sagittarius": 21
  }
  Object.keys(zodiac).forEach((value, index, zodiacArray) =>
  {
    const daysInMonth = dayFormula('2000', month - 1);
    return calendar.push(Array(daysInMonth).fill(value,0, zodiac[value]).fill(zodiacArray[(index + 1) % (zodiacArray.length)],daysInMonth - zodiac[value]));
  }); 
  return calendar[month - 1][day]; 
}

console.log(getZodiacSignEx(25, 11)); 