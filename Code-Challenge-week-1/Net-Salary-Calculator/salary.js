function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.3;
    const nhifDeduction = 2000;
    const nssfDeduction = 0.05; 
    const grossSalary = basicSalary + benefits;
    const tax = grossSalary * taxRate;
    const netSalary = grossSalary - tax - nhifDeduction - (grossSalary * nssfDeduction);
  
    return {
      grossSalary,
      tax,
      nhifDeduction,
      nssfDeduction: grossSalary * nssfDeduction,
      netSalary,
    };
  }
  module.exports = calculateNetSalary;
  