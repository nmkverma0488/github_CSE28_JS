package demo;

class SavingsAccount extends BankAccount {

    SavingsAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    void calculateInterest() {
        double interest = balance * 0.05;
        System.out.println("Savings Account Interest: " + interest);
    }
}