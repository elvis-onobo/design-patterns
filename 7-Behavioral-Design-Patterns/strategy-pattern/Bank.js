/**
 * This is our strategy class to implement an interface for all banks
 */
class Bank {
    constructor(amount, account) {
        this.amount = amount
        this.account = account
    }

    pay() {
        return this.processPayment()
    }

    refund() {
        return this.processRefund()
    }
}

module.exports = Bank