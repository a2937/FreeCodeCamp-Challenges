vowels = /[aeiou]/gi;
###*
# 
# @param {string} sentence
###
disemvowel = (sentence) => sentence.replace vowels, "";

console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));