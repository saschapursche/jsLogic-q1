const array = [1, "2", "3", 2];
const arrayStrings = [];
const arrayInt = [];
const newArray = [];

const compareString = () => {
    let string1 = array[1];
    console.log(string1);
    let string2 = array[2];
    console.log(string2);
    arrayStrings.push(string1, string2);
    console.log(arrayStrings);
}

const mergingNumbers = () => {
let int1 = array[0];
let int2 = array[3];
arrayInt.push(int1, int2);
console.log(arrayInt);
}

compareString();
mergingNumbers();

newArray.push(arrayInt, arrayStrings);
console.log(newArray);
