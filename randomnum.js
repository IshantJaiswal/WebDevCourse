function printRandomNumber() {
  setInterval(() => {
    const randomNumber = Math.random()
    console.log(`Random number: ${randomNumber}`)
  },
   2000 /*print thee no. in every 2 sec....*/) 
}
printRandomNumber();
