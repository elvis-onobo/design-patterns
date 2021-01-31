 /**
  * SINGLETONS
  * In singletons, objects and classes only have a single and common instance
  * 
  * Instantiating a class before exporting it as a module makes it become a singleton
  * than can be used over and in better ways
  */
let legs = 2

class Person {
    constructor(name) {
        this.name = name
    }
    eat() {
         console.log(`Person named ${this.name} eats`)
    }
    
    drink() {
        console.log(`Person named ${this.name} drinks`);
    }

    legCount() {
        console.log(`Person named ${this.name} drinks has ${legs} legs`);
    }
}
 
module.exports = new Person()

/** By instantiating the Person class before exporting, we make sure that every
 * time it is called, we access the actual class itself and make changes on it.
 * 
 * This is different from cases where the class is used as a blueprint for for instantiating new objects.
 * 
 * However, in the case of the legs variable, we do not need to instantiate the class as the methods will
 * modify the variable itself, thereby making it work as a singleton.
 */