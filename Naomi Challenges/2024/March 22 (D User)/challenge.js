
const fs = require("fs/promises");


/**
 * @type {String[]}
 */
const userStorage = [];



/**
 * 
 * @param {String} userId 
 */
function addUser(userId) {
  const regex = /^\d{16,19}$/
  if (regex.test(userId)) {
    if (!userStorage.includes(userId)) {
      userStorage.push(userId);
    }
  }
}


async function writeUserIds() {
  const myOutput = userStorage.join("\n");
  await fs.writeFile("users.txt", myOutput);
  return myOutput;
}