// ## Array Cardio Day 2

const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
];

const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks

// Array.prototype.some() // is at least one person 19 or older?
const check1 = people.some((e) => {
    const dateYear = new Date().getFullYear();
    // const atLeast = 53;
    // console.log(dateYear - e.year);
    // console.log(dateYear - e.year > atLeast);
    return dateYear - e.year > 19;
});
// console.log(check1);
// console.log({check1});

// Array.prototype.every() // is everyone 19 or older?
const check2 = people.every((e) => {
    const date = new Date();
    return date.getFullYear() - e.year > 19;
});
// console.log(check2);
// console.log({check2});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const commentFind = comments.find((e) => e.id === 823423);
// console.log(commentFind);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentFindIndex = comments.findIndex((e) => e.id === 823423);
console.log(commentFindIndex);
delete comments[commentFindIndex];
console.log(comments);
