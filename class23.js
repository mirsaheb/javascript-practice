// const students = ['abul', 'babul', 'kabul', 'chabul', 'atik', 'protik', 'hassan', 'rafiq', 'shofiq', 'kabul', 'rafiq', 'abul', 'atik', 'babul', 'abul', 'kabul', 'abul'];

// function removeDuplicate(students){
//     for(let i=0; i<students.length; i++){

//         const student = students[i];
//         console.log(student);

//     }
// }
// const uniqueStudent=removeDuplicate(students);

// function removeDuplicate(students){
//     for(let i=0; i<students.length; i++){
//         const student = students[i];
//         console.log(student);
//     }
// }

// const uniqueStudent= removeDuplicate(students);




// function removeDuplicates(names){
//     for(let i=0; i<names.length; i++){
//         const name = names[i];
//         console.log(name)
//     }
// }

// const uniqueNames= removeDuplicates(names)

const names = ['abul', 'babul', 'kabul', 'chabul', 'atik', 'protik', 'hassan', 'rafiq', 'shofiq', 'kabul', 'rafiq', 'abul', 'atik', 'babul', 'abul', 'kabul', 'abul'];
function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name)===false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);