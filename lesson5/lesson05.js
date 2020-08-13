function bank() {
  let quit = false;
  let balance = 0;

  while (quit === false) {
    let input = prompt('How can I help you? :\n"B" to view current balance\n"W" to withdraw money (Min. Balance = $300)\n"D" to deposit (Max. $50,000 in a day)\n"Q" to quit');
    let adjustInput = input.toUpperCase();
    switch (adjustInput) {

      case "Q": {
        quit = true;
        break;
      }

      case "B": {
        if (balance < 300) {
          alert('Current balance: $' + balance +'. Warning: Your balance is below $300. Please check your account.')
        }
        else {
          alert('Your current balance is $' + balance);
        }
        break;
      }

      case "W": {
        let withdraw = prompt('Enter an amount to withdraw: ');
        if (balance - withdraw < 300) {
          alert("Warning!! Your balance cannot be less than $300! ")
        }
        else {
          let adjustWithdraw = Number(withdraw);
          let withdrawAmount = balance - adjustWithdraw;b
          balance = withdrawAmount;
          alert('Your new balance is: $' + balance);
        }
        break;
      }

      case "D": {
        let deposit = prompt('Enter an amount to deposite: ');
       if ( deposit >= 50000) {
          alert("Deposits cannot exceed $50,000!");
        }
        else {
          let adjustDeposit = Number(deposit);
          let depositAmount = balance + adjustDeposit;
          balance = depositAmount;
          alert('Your new balance is: $' + balance);
        }
        break;
      }
      default: {
        alert('Please choose a B, W, D, or Q.')
      }
    }
  }
  alert('Have a nice day! See you soon.');
}