// ! AQUI NORMAL, SE HACE DIGAMOS UNA COPIA

// start with strings, numbers and booleans
let nombre = "Sebastian";
let copyNombre = nombre;
copyNombre = "Andrea";
console.log(nombre);
console.log(copyNombre);

// ! SIN EMBARGO, AQUI COMIENZAN LAS REFERENCIAS

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.

// You might think we can just do something like this:
// const copyPlayers = players;

// however what happens when we update that array?
// copyPlayers[0] = "sebastian";
// console.log(copyPlayers);

// now here is the problem!

// ! oh no - we have edited the original array too!
// console.log(players);

// ! Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
// const copy2Players = players.slice()

// or create a new array and concat the old one in
// const copy2Players = [].concat(players);
// copy2Players[0] = "Sebastian";
// console.log(players);
// console.log(copy2Players);

// or use the new ES6 Spread
const copy2Players = [...players];
// const copy2Players = Array.from(players);

// now when we update it, the original one isn't changed
copy2Players[0] = "Sebastian";
console.log(players);
console.log(copy2Players);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: "Wes Bos",
    age: 80,
    perros: {
        perro1: "Nala",
        perro2: "Negrita",
    },
};

// and think we make a copy:
// const copyPerson = person;
// copyPerson.name = "Sebastian";
// console.log(person);
// console.log(copyPerson);

// how do we take a copy instead?
const copy2Person = Object.assign({}, person, {
    name: "Sebastian",
}); /* esta es una copia con el valor de una propiedad modificada, si no quieres modificarla, solo borra ese 3er argumento */
console.log(person);
console.log(copy2Person);

// We will hopefully soon see the object ...spread

// ! Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const copy3Person = Object.assign({}, person);
// copy3Person.perros.perro1 = "Luna";
// console.log(person);
// console.log(copy3Person);

// metodo para evitar ello
const copy4Person = JSON.parse(JSON.stringify(person));
copy4Person.perros.perro2 = "Luna";
console.log(person);
console.log(copy4Person);

// sin embargo, dificilmente querras hacer esto pq dificilmente necesitaras copiar un objeto tan a fondo
