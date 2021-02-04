const Payment = require('./Payment')
const Chase = require('./Chase')
const CitiBank = require('./CitiBank')

// instatiate the payments class
const payment = new Payment()

// make a payment
payment.pay(new Chase(200, '2003560903'))
payment.pay(new CitiBank(500, '2003560903'))

payment.refund(new CitiBank(500, '2003560903'))
