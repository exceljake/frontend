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

# Transfer function --- 

### will create new transactions -- done
### every transfer will add a new transaction for the from.expenses and to.incomes -- done
### will return false if sender's balance is insufficient

- will create a new transaction then push to incomes of receiver, and expenses of sender
- if sender has insufficient amount, will return false

###