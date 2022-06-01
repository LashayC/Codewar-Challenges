// Task
// Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// little tips: Use default for most of the cases can reduce your work.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function howManydays(month){
    let days 
  
    switch (month <= 12 && month > 0){
    case month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12:
       days = 31
        break;
    case month === 4 || month === 6 || month === 9 || month === 11: 
        days = 30
        break;
    case  month === 2:
        days = 28
  
    }  
    return days
  }
  