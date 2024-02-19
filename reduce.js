
const expenses = [
    {  name: 'Groceries', amount: 200 },
    {  name: 'Utilities', amount: 100 },
    {  name: 'Entertainment', amount: 50 }
  ]
  const totalAmount = expenses.reduce((accumulator, currentExpense) => {
    return accumulator + currentExpense.amount }, 0)
  console.log('Total expenses amount:', totalAmount)
  