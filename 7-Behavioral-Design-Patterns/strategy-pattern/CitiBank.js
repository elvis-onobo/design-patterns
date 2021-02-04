/**
 * Assuming this is CitiBank bank
 */
const Bank = require('./Bank')

class CitiBank extends Bank {
    processPayment() {
        console.log(`Your payment of ${this.amount} for ${this.account} has been processed by CitiBank Bank`);
    }

    processRefund() {
        console.log(`A refund of ${this.amount} for ${this.account} has been processed by CitiBank Bank`);
    }
}

module.exports = CitiBank