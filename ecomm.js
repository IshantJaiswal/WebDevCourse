const orderlist = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Mobile Charger", price: 1500 },
    { name: "Laptop charger", price: 10500 }
  ]
  function calculateTotalOrderAmount(items) {
    let totalAmount = 0
    items.forEach(item => {
      totalAmount += item.price
    })
    return totalAmount
  }
  const totalOrderAmount = calculateTotalOrderAmount(orderlist)
  console.log(`Total order amount: $${totalOrderAmount}`)
  