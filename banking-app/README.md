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

### current date will be displayed on the transaction

Priority for today (05/14/22)

MOST PRIO 

# delete usershistory --- done
# Function showHistory --- done

1. takes params users, mobile - check
2. declare  empty array - check
3. push user.incomes and user.expenses to array - check
4. Sort by date - done
5. return history - done

### showhistory will display a table showing all the transactions of EACH user --- done

# Refactor total balance to fit showHistory - (pending)

 console.log(incomesExpensesArray[i].amount += sum); = returns a value of 0 0 

 - current progress: been able to show amounts that has type deposit

 - blockers is i cant add them

# create an array to push both incomes and expenses to serve as an admin history list -- (pending)

# Budget App

### change addExpense code to balance can be negative
### add a deleteExpense method  

# Transfer error handling

### sender does not exist, return undefined
### receiver does not exist, return undefined
