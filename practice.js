// function objectify(myArr) {
//     let l = myArr.length;
//     let s = "";
//     for (let i = 0; i < l; i++) {
//         s += myArr[i] + " ";
//     }
//     console.log({Length: l, Sentence: s.trim()})
// }

/*  MAPS AND SHIT */
// let arr = ["Source", "is", "cool_", ":)"];
// objectify(arr);

// let array = [1, 2, 4, 8, 16];

// let newArray = array.map((x, index) => {
//     console.log(index);
//     return x + 3;
// });

// console.log(array);
// console.log(newArray);

/*  MAPS AND SHIT EXAMPLE */
let people = [{Name: "Mike", Age: 20}, {Name: "Bailey", Age: 21}, {Name: "Daniel", Age: 19}];

let justNames = people.map((x, index) => {
    if (index == 1) {
        return "is awesome, but so is";
    }
    return x.Name;
});

console.log(justNames);