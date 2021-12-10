function main(input) {
  let integerList = extractIntegerList(input)
  let integerArray = splitIntegerList(integerList)
 
  //return resultWithSet(integerArray).join(" ")
  return resultWithLoop(integerArray).join(" ")
}

function resultWithSet(integerArray) {
  return [... new Set(integerArray) ]
}

function resultWithLoop(integerArray) {
  let result = []
  integerArray.forEach(element => {
  if (!result.includes(element)) {
      result.push(element)
    }
  });
  return result
}

function extractIntegerList(input) {
  return input.split("\n")[1]
}

function splitIntegerList(integerList) {
  return integerList.split(" ")
}