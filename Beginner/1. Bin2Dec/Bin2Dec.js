function fetchBitFromString(string, index) {
  return +string.charAt(index)
}

function fetchBitFromArray(array, index) {
  return +array[index]
}

// Takes binary input as string or array
function binaryToDecimal(binaryNum) {
  let decimal = 0
  const inputType = typeof binaryNum
  let fetch = null
  let length = -1
  if(inputType === 'string') {
    fetch = fetchBitFromString
    length = binaryNum.length - 1
  } else if(inputType === 'object' && binaryNum instanceof Array) {
    fetch = fetchBitFromArray
    length = binaryNum.length - 1
  } else {
    console.log('ERROR');
    throw new Error('Error: Function only supports type String and Array')
  }
  for (let index = 0; index <= length; index++) {
    const bitIndex = length - index
    let bit = fetch(binaryNum, bitIndex)
    
    if(bit > 1) {
      throw new Error('Error: Bit can only consists of "0" or "1"')
    }
    decimal += bit ? bit * Math.pow(2, index) : 0
  }
  return decimal
}

const val = binaryToDecimal(['1','1','1','0'])

console.log(val);
