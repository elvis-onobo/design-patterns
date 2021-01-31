const SignupBuilder = require('./SignupBuilder')

new SignupBuilder('Elvis', 'elvis.onobo@gmail.com', 25) // then we can chain optional features
    .setNick('EL')
    .setPhoto('picture')
    .favouriteTopics(['programming', 'love'])
    .create()

/**
 * With the signupbuilder, the methods are flexible and can be changed by the user
 * however they want, ignoring the ones they do not want and using the ones they want
 * 
 * This can be used in building an NPM package where users should be able to chain the methods
 * they choose.
 * 
 * I can use this pattern to create a signup package where the user can choose to add any 
 * type of condition for signing up
 */