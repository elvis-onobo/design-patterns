/**
 * Strategy hides the internal implementation logic from the client
 * 
 * For instance, you want to allow customers to implement multipe=le payments for multiple banks or payment processor,
 * it will be done like this
 */
class Payment {
    pay(processor) {
      return processor.pay()  
    }
    refund(processor) {
        processor.refund()
    }
}

module.exports = Payment