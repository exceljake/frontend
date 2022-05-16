# HTML Layout

- Figma
- Adobe
- Drawing
- Overall Look

### Is the Design/HTML Code First or the function (which means
### starting the JS code)?

# User --- done

- mobile    -> number 11 digits
- password  -> string
- fullname  -> string
- balance   -> number
- incomes   -> array of transactions (type: income)
- expenses  -> array of transactions (type: expense)

# Transaction --- done

- id   -> random-number
- type -> income/expense string


Priority for Today (May 13 2022)

# Sign Up (functions first, then DOM) 

- mobile    -> number
- password  -> password

### takes params mobile and password
### check for existing account
- if existing, show an error " Already exist "
- if not existing, add to the list of users
- if not existing, proceed. return the user object

# Login (functions first, then DOM) --- done

### takes params mobile and password
### check for existing account
- if existing, proceed to dashboard
- if none existing, throw an error
- if wrong creds, throw an error

# Withdraw (functions first, then DOM) --- done

### takes params user and amount
### withdraws money from user balance
- amount will be deducted from user balance

----- progress after avion session ---
# Transfer function --- done

### will create new transactions -- done
### every transfer will add a new transaction for the from.expenses and to.incomes -- done
### will return false if sender's balance is insufficient

- will create a new transaction then push to incomes of receiver, and expenses of sender
- if sender has insufficient amount, will return false

# Admin account --- done

### change login conditions, add an admin condition --- done

# Date and time on Transactions --- done

### current date will be displayed on the transaction --- done

Priority for today (05/14/22)

# delete usershistory --- done
# Function showHistory --- done


1. takes params users, mobile - check
2. declare  empty array - check
3. push user.incomes and user.expenses to array - check
4. Sort by date - done
5. return history - done

### showhistory will display a table showing all the transactions of EACH user --- done


Priority for today (05/15/22)
# Refactor total balance to fit showHistory - (done)

- attach code of totalBalance to showHistory
- what happened was the outcome of showhistory was just the result of totalIncomes + total expense
- i realized i had to make another function to separate showHistory and totalBalanceTransactionHistory.

# Create function totalBalanceTransactionHistory - done

### will show final balance of transaction history by subtracting total income and total expense

- take params user, mobile
- find mobile
- if existing, will access incomes array, get the total sum
- will acess expenses array, get total difference
- will subtract total income from total expenses
- return


# Budget App

### change addExpense code to balance can be negative -- done
### add a deleteExpense method and deleteIncome --- done

1. takes params mobile, transactionId -- done
2. find mobile -- done
3. if found, find the expense which satisfies the transactionId -- done
4. get amount then add to userbalance -- done

### add a deleteIncome method

1. takes params mobile, transactionId -- done
2. find mobile -- done
3. if found, find the income which satisfies the transactionId -- done
4. get amount then subtract to userbalance -- done

# Arrange functions for readability - done

PRIORITY 5/16/22

# function parse time -- done

