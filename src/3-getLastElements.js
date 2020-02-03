/**

Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

console.log(getLastElements([7, 9, 0, -2]));
console.log(getLastElements([],3));
console.log(getLastElements([7, 9, 0, -2],3));
console.log(getLastElements([7, 9, 0, -2],6));

Expected Output :
-2
[]
[9,0,-2]
[7, 9, 0, -2]

 */


const getLastElements = function (elements, number = 1) {

    
    //element represent array
    //number will return the last 1,2,3,... object in array
   

        // todo

        elements.pop(number);

        


}

getLastElements([7, 2, 3])

/*const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);*/


export default getLastElements;