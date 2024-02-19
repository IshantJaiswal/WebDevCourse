const expenses = [
    {  name: 'Groceries', amount: 200 },
    {  name: 'Utilities', amount: 100 },
    {  name: 'Entertainment', amount: 50 }
  ]
const groceriesExpenses = expenses.filter((expense) => expense.category === 'Groceries')
console.log("groceries amount ",groceriesExpenses)
  