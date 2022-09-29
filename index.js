// Your code here
class Speaker {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak() {
        return `${this.name} says `
    }
}

class Cat extends Speaker {
    speak() {
        return super.speak() + "meow!"
    }
}

class Dog extends Speaker {
    speak() {
        return super.speak() + "woof!"
    }
}

class Bird extends Speaker {
    speak() {
        if (this.sex === 'male')
            return `It's me! ${this.name}, the parrot!`
        else
            return super.speak() + "squawk!"
    }
}