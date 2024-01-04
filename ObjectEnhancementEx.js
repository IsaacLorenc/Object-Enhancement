function createInstructor(firstName, lastName) {
    return{
        firstName,
        lastName
    }
}

let favoriteNumber = 42;
const instructor1 = {
    firstName: 'Colt',
    [favoriteNumber] : "That is my favorite!"
}

let instructor = {
firstName: 'Colt',
sayHi() {
    return 'Hi!'
},
sayBye() {
    return this.firstName + "says bye!";
}
}

const d = createAnimal('dog', 'bark', 'Woooof!')
d.bark()

const s = createAnimal('sheep', 'bleet', 'BAAAAaaaa')
s.bleet()

function createAminal(species, verb, noise) {
    return {species,
    [verb](){
        return noise;
    }
}
}