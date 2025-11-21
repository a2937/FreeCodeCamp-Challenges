import { existsSync, readFile } from 'fs';
import { expect, assert } from "chai";
import { resolve, join } from 'path';
const filePath = resolve("example-data.json");


let jsonData;

/**
 * 
 * @param {any[]} array 
 * @returns 
 */
function getRepeats(array) {
  const uniqueElements = new Set();
  const duplicates = [];

  array.forEach(item => {
    if (uniqueElements.has(item)) {
      if (!duplicates.includes(item)) {
        duplicates.push(item);
      }
    } else {
      uniqueElements.add(item);
    }
  });
  return duplicates;
}

/**
 * 
 * @param {String} fileName 
 */
function toTitleCase(fileName) {
  return fileName.split(" ").map(x => x[0].toUpperCase() + x.substring(1).toLowerCase()).join(" ");
}

describe("Test initialization works properly", function () {
  it("The test system starts properly", function () {
    assert.equal(1, 1, "The test system failed to boot");
  });
  it("Repeats are properly recognized", function () {
    let myNums = [1, 2, 3, 2];
    let repeats = getRepeats(myNums);
    assert.equal(repeats.join(","), "2", "Repeats not properly found");
  });
  it("All file names are title cased", function () {
    assert.equal(toTitleCase("denim"), "Denim");
  });
})


before(function (done) {
  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      done(err); // Pass any errors to Mocha
      return;
    }
    try {
      jsonData = JSON.parse(data);
      done(); // Call done() to indicate that the setup is complete
    } catch (error) {
      done(error);
    }
  });
});

describe('Processing JSON data asynchronously', function () {
  // Test case to check if the data is an array
  it('should verify that the data is an array', function () {
    expect(jsonData).to.be.an("array");
    expect(jsonData.length).to.be.greaterThan(0);
  });

  it('every name should be a valid string', function () {

    var names = jsonData.map(x => x.name);
    var repeats = getRepeats(names).join(",");
    expect(names).to.have.lengthOf(new Set(names).size, "The following names are repeated: " + repeats);
    for (let i = 0; i < names.length; i++) {
      expect(names[i]).to.be.an("string");
      expect(names[i].length).to.be.greaterThan(0);
    }
  });

  it('every filename should be a valid string', function () {
    var fileNames = jsonData.map(x => x.fileName);
    var repeats = getRepeats(fileNames).join(",");
    expect(fileNames).to.have.lengthOf(new Set(fileNames).size, "The following file names are repeated: " + repeats);
    for (let i = 0; i < fileNames.length; i++) {
      expect(fileNames[i]).to.be.an("string");
      expect(fileNames[i].length).to.be.greaterThan(0);
      var outfitPath = join("vtuber", "outfits", fileNames[i]);
      var vrmPath = join("vtuber", "vrms", "Naomi " + toTitleCase(fileNames[i]).replace("-", " ").replace(".png", ".vrm"));
      var vroidPath = join("vtuber", "vroid", "naomi-" + fileNames[i].replace(".png", ".vroid"));
      console.log("Outfit path: " + outfitPath);
      console.log("VRM path: " + vrmPath);
      console.log("Vroid path: " + vroidPath);
      assert.isTrue(existsSync(outfitPath), outfitPath + " not found");
      assert.isTrue(existsSync(vrmPath), vrmPath + " not found");
      assert.isTrue(existsSync(vroidPath), vroidPath + " not found");
    }
  });

  it('every description should be a valid string', function () {
    var descriptions = jsonData.map(x => x.description);
    for (let i = 0; i < descriptions.length; i++) {
      expect(descriptions[i]).to.be.an("string");
      expect(descriptions[i].length).to.be.greaterThan(0);
    }
  });

  it('every alt should be a valid string', function () {
    var alts = jsonData.map(x => x.alt);
    for (let i = 0; i < alts.length; i++) {
      expect(alts[i]).to.be.an("string");
      expect(alts[i].length).to.be.greaterThan(0);
    }
  });

  it('every credits should be valid', function () {

    var credits = jsonData.map(x => x.credits);
    var creditPropertyValues = credits.flatMap(x => Object.values(x));
    var repeats = getRepeats(creditPropertyValues).join(",");
    expect(creditPropertyValues).to.have.lengthOf(new Set(creditPropertyValues).size, "The following values are repeated: " + repeats);
    for (let creditIndex = 0; creditIndex < credits.length; creditIndex++) {
      expect(credits[creditIndex]).to.be.an("object");
      var creditValues = Object.values(credits[creditIndex]);
      expect(creditValues).to.have.lengthOf(new Set(creditValues).size, "Some credit values repeat");
      for (let i = 0; i < creditValues.length; i++) {
        expect(creditValues[i]).to.be.an("string");
        expect(creditValues[i].length).to.be.greaterThan(0);
        expect(creditValues[i]).to.match(/^https:\/\/booth.pm\/en\/items\/\d+$/)
      }
    }
  });
});