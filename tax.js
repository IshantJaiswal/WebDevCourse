const expenses = [
    { amount: 100, category: "utilities" },
    { amount: 200, category: "groceries" },
    { amount: 50, category: "entertainment" },
]
const taxRate = 0.10
const expensesWithTax = []
for (const expense of expenses) {
    const taxAmount = expense.amount * taxRate
    const expenseWithTax = {
        amount: expense.amount,
        category: expense.category,
        tax: taxAmount,
    }
    expensesWithTax.push(expenseWithTax)
}
console.log(expensesWithTax)
