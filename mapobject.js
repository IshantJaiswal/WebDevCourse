let numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

let squares = new Map()

for (let num of numbers) {
  squares.set(num, num * num)
}

console.log("The unique numbers are:")
for (let num of numbers) {
  console.log(num)
}
console.log("The squares of the numbers are:")
for (let [num, square] of squares) {
  console.log(`${num} -> ${square}`)
}
