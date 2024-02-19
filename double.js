let originalNumbers = [2, 5, 8, 10, 3]
originalNumbers.forEach((number, index) => {
  originalNumbers[index] = number * 2
})
console.log('Modified array:', originalNumbers)
