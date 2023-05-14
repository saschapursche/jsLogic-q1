const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const sortingArray = () => {
    array.sort((a, b) => a-b);
    console.log(array);
};

const mergingNumbers = () => {
let merging1 = array.filter(num => num ===1)
    console.log(merging1);
let merging2 = array.filter(num => num ===2)
    console.log(merging2);
let merging20 = array.filter(num => num ===20)
    console.log(merging20);
};

const insertingNumbers = () => {
    array.splice(0, 4, merging1);
    console.log(array);
    array.splice(1, 3, merging2);
    console.log(array);
    array.splice(5, 2, merging20);
    console.log(array);
};

sortingArray();
mergingNumbers();
insertingNumbers();

//Clean the room function:
//given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
//make a function that organizes these into individual array that is ordered.
//For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//Bonus: Make it so it organizes strings differently from number types.
//i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]