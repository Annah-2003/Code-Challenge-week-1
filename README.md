
# Coding Challenges-Week-1

## Challenge 1: Student Grade Generator

it is going to prompt the user to input student marks. The input should be between 0 and 100. The output should correspond to the correct grade, as shown below:

- A: Greater than 79
- B: 60 to 79
- C: 49 to 59
- D: 40 to 49
- E: Less than 40

## Challenge 2: Speed Detector  
It  is going to take the speed of a car as input (in km/h, e.g., 80)
 If the speed is less than 70, it should print "OK." Otherwise, for every 5 km/h above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
 Additionally, if the driver accumulates more than 12 points, the program should print "License suspended."
 
  

## Challenge 3: Net Salary Calculator
This challenge calculates an individual's Net Salary. It takes the inputs of basic salary and benefits, then calculates the payee (i.e., Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary based on predefined rates and rules.

calculateNetSalary(50000, 10000); 
calculateNetSalary(70000, 15000); 

EXAMPLE 
irene@irene-HP-EliteBook-8460p:~/Development/code/Code-Challenge-week-1/Net-Salary-Calculator$ node index.js '/home/irene/Development/code/Code-Challenge-week-1/Net-Salary-Calculator/index.js'
Enter basic salary: 90000'/home/irene/Development/code/Code-Challenge-week-1/Net-Salary-Calculator/salary.js'
Enter benefits: 4000'/home/irene/Development/code/Code-Challenge-week-1/Net-Salary-Calculator/salary.js'
Gross Salary: 94000
Tax (PAYE): 28200
NHIF Deduction: 2000
NSSF Deduction: 4700
Net Salary: 59100
