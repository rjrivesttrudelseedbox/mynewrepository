/**
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the

console.log(getFirstElements([7, 9, 0, -2]));
console.log(getFirstElements([],3));
console.log(getFirstElements([7, 9, 0, -2],3));
console.log(getFirstElements([7, 9, 0, -2],6));

Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]

 */
const getFirstElements = function(elements, number=1) {
   
    // todo
    return elements.slice(0,number)
    
}

export default getFirstElements;