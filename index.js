let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0




for(let i = 0; i < weeklyExpenseQuestions.length; i++){
   let weeklyAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
   weeklyExpenses = weeklyExpenses + weeklyAnswer
}

for(let m = 0; m < monthlyExpenseQuestions.length; m++){
    let monthlyAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[m]))
    monthlyExpenses = monthlyExpenses + monthlyAnswer
 }