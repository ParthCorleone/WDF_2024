let userName="Parth"
let dailybudget=500
let isBudget = false

let expense=180
dailybudget-=expense

if (dailybudget>0){
    isBudget=true
}

if (isBudget){
    console.log(`Hello ${userName}, your remaining Budget is ${dailybudget}`)
}