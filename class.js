// class Bank {
//     #balance;
//   constructor(name, account, balance, phNo) {
//     this.name = name;
//     this.account = account;
//     this.#balance = balance;
//     this.phNo = phNo;
//   }

//   deposit(amt){
//     this.#balance=this.#balance+amt;
//   }
//   getbalance(){
//     return`your balance is ${this.#balance}`;
//   }
//   withdraw(amt){
//     if(amt>this.#balance){
//         console.log("amount exceeds")
//     }
//     else{

//         this.#balance=this.#balance-amt;
//     }
//   }
// }

// const user1 = new Bank("raja", 1234567890, 10000, 6379375618);
// const user2 = new Bank("bhavani", 2234567890, 20000, 6379375618);
// const user3 = new Bank("mano", 3234567890, 30000, 6379375618);
// // console.log(user1);
// // console.log(user2);
// // console.log(user3);
// // user2.deposit(10000);
// user2.withdraw(10000);
// //console.log(user2.);
// console.log(user2.getbalance());


class Bank {
    #balance;
    constructor(name, accNumber, balance) {
      this.name = name;
      this.accNumber = accNumber;
      this.#balance = balance;
      this.transactions = [];
    }
    Deposit(amt) {
      this.#balance += amt;
      this.transactions.push({
        accNum: this.accNumber,
        type: "deposit",
        amount: amt,
        balancee: this.#balance,
      });
      // console.log(this.transactions);
      return this.getBalance();
    }
    getBalance() {
      return `your balance is ${this.#balance}`;
    }
  
    withdraw(amt) {
      if (amt <= this.#balance) {
        this.#balance -= amt;
        this.transactions.push({
          accNum: this.accNumber,
          type: "withdraw",
          amount: amt,
          balancee: this.#balance,
        });
        return this.getBalance();
      } else {
        return `you dont have enough balance - ${this.getBalance()}`;
      }
    }
    getTransactions() {
      return this.transactions;
    }
  }
  const acc1 = new Bank("rdx", 1234567891, 1000);
  const acc2 = new Bank("mano", 1234567812, 1500);
  const acc3 = new Bank("bhavani", 1234567831, 1800);
  console.log("account holder 1");
  console.log(acc1.Deposit(2000));
  console.log(acc1.withdraw(500));
  console.log(acc1.getTransactions());
  console.log("account holder 2");
  console.log(acc2.Deposit(500));
  console.log(acc1.getTransactions());
  
