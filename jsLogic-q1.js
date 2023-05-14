const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const sortingArray = () => {
    array.sort((a, b) => a-b);
};

const mergingNumbers = () => {
    let merging1 = array.filter(num => num ===1)
    let merging2 = array.filter(num => num ===2)
    let merging20 = array.filter(num => num ===20)
};

const insertingNumbers = () => {
    array.splice(0, 4, merging1);
    array.splice(1, 3, merging2);
    array.splice(5, 2, merging20);
};

sortingArray();
mergingNumbers();
insertingNumbers();
console.log(array);