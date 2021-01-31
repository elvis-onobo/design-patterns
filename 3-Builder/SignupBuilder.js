const SignUp = require('./Signup')

class SignupBuilder {
    constructor(name, email, age) {
        this.name = name,
        this.email = email,
        this.age = age
    }

    setNick(name) {
        this.name
        return this
    }

    setPhoto(photo) {
        this.photo = this.photo
        return this
    }

    setTopics(topics) {
        this.favouriteTopics = topics
        return this
    }

    create() {
        return SignUp.create(this) // this brings binds all the methods into the created class
    }
}

module.exports = SignupBuilder