// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
    "Bernhard, Sandra",
    "Bethea, Erin",
    "Becker, Carl",
    "Bentsen, Lloyd",
    "Beckett, Samuel",
    "Blake, William",
    "Berger, Ric",
    "Beddoes, Mick",
    "Beethoven, Ludwig",
    "Belloc, Hilaire",
    "Begin, Menachem",
    "Bellow, Saul",
    "Benchley, Robert",
    "Blair, Robert",
    "Benenson, Peter",
    "Benjamin, Walter",
    "Berlin, Irving",
    "Benn, Tony",
    "Benson, Leana",
    "Bent, Silas",
    "Berle, Milton",
    "Berry, Halle",
    "Biko, Steve",
    "Beck, Glenn",
    "Bergman, Ingmar",
    "Black, Elk",
    "Berio, Luciano",
    "Berne, Eric",
    "Berra, Yogi",
    "Berry, Wendell",
    "Bevan, Aneurin",
    "Ben-Gurion, David",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bennington, Chester",
    "Bierce, Ambrose",
    "Billings, Josh",
    "Birrell, Augustine",
    "Blair, Tony",
    "Beecher, Henry",
    "Biondo, Frank",
];

// Array.prototype.filter()
// ! 1. Filter the list of inventors for those who were born in the 1500's
const bornin1500 = inventors.filter(
    // * forma mas corta:
    (inventor) => inventor.year >= 1500 && inventor.year < 1600

    // * otra forma de hacerlo más larga: retornando un true
    // (inventor) => {
    //     if (inventor.year >= 1500 && inventor.year < 1600) {
    //         return true:
    //     }
    // }
);
// console.log(bornin1500);
// console.table(bornin1500);

// Array.prototype.map()
// ! 2. Give us an array of the inventors first and last names
const firstlastNames = inventors.map(
    (inventor) => `${inventor.first} ${inventor.last}`
);
// console.log(firstlastNames);

// Array.prototype.sort()
// ! 3. Sort the inventors by birthdate, oldest to youngest
const sorting = inventors.sort(
    (inventor1, inventor2) => (inventor1.year > inventor2.year ? 1 : -1)
    // Si el inv1 > inv2... devuelve 1... que significa que inv1 se COLOCA DESPUÉS. asi se van colocando todos los mayores despues... y ordenando de menor a mayor
);
// console.log(sorting);

// Array.prototype.reduce()
// ! 4. How many years did all the inventors live all together?
const valorInicial = 0;
const yearsInventors = inventors.reduce((total, inventor) => {
    // inventor es el objeto de mi array
    // total inicialmente toma el valor inicial de 0, luego toma el acumulado de lo retornado
    return total + (inventor.passed - inventor.year);
}, valorInicial);
// console.log(yearsInventors);

// ! 5. Sort the inventors by years lived
const sortYearsLived = inventors.sort((inv1, inv2) => {
    const inv1YearsLived = inv1.passed - inv1.year;
    const inv2YearsLived = inv2.passed - inv2.year;
    // console.log(inv1YearsLived);
    return inv1YearsLived > inv2YearsLived ? 1 : -1;
});
// console.log(sortYearsLived);

// ! 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// * es importante convertir el nodelist a un array... porque el nodelist no tiene los mismos metodos que un array, por ejemplo map, etc.
const links = Array.from(document.querySelectorAll(".mw-category-group a"));

const mapsa = links.map((e) => e.text);
const conDe = mapsa.filter((e) => e.includes("de"));

// ! 7. sort Exercise
// Sort the people alphabetically by last name
const sortAlphabetic = people.sort((lastOne, nextOne) => {
    // console.log(lastOne);
    // console.log(nextOne);
    // console.log(lastOne.split(", "));
    const [aLast, aFirst] = lastOne.split(", ");
    const [bLast, bFirst] = nextOne.split(", ");
    // console.log(aFirst, aLast);
    // console.log(bFirst, bLast);
    return aLast > bLast ? 1 : -1;
    // lastOne.last > nextOne.last ? 1 : -1
});
// console.log(sortAlphabetic);

// ordena alfabeticamente pero considerando el nombre
const sortAlphabetic2 = people.sort((lastOne, nextOne) => {
    return lastOne > nextOne ? 1 : -1;
});
// console.log(sortAlphabetic2);

// ! 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
];
// const a = data.indexOf("truck");
// console.log(data[a]);

// const ob = {
//     raa: 2,
// };
// console.log(ob["raa"]);

const exer8 = data.reduce((objeto, item) => {
    // si el valor de item de mi objeto no existe en el objeto...
    if (!objeto[item]) {
        objeto[item] = 0; // esto crea una propiedad y valor en un objeto, por ejemplo : "car:0"
    }
    // hasta este punto ya existe la propiedad item en mi objeto
    objeto[item]++; // por lo que solo queda sumar su valor en 1, sucecivamente, cada vez que pase por aqui
    // console.log(objeto);
    return objeto; // en cada iteracion retorno mi objeto con las propiedades que se van creando
}, {});

console.log(exer8);
