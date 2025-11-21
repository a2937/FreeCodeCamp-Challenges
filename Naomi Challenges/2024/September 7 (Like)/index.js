/**
 * 
 * @param {String[]} likeArray 
 */
function stringifyLikes(likeArray)
{
  if (likeArray.length == 0)
  {
    return "no one likes this";
  }
  else if (likeArray.length == 1)
  {
    return likeArray[0] + " likes this";
  }
  else if (likeArray.length == 2)
  {
    return likeArray[0] + " and " + likeArray[1] + " like this";
  }
  else if (likeArray.length == 3) {
    return likeArray[0] + " and " + likeArray[1] + " and " + likeArray[2] + " like this";
  }
  else if (likeArray.length > 3)
  {
    return likeArray[0] + ", " + likeArray[1] + ", " + "and " + (likeArray.length - 2).toString() + " others like this"
  }
}

console.log(stringifyLikes(["Naomi", "Rain", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]));