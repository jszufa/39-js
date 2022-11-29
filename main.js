let numbers = [17, 2, 3, 4, 5];

function firstEl (...numbers){
    return numbers[0]
}

console.log (firstEl(...numbers))
//"..." spread operator konwertuje tablicę w zbiór argumentów


/* function firstElement (x1, x2, x3, x4, x5){
    return x1;
}

console.log(firstElement(...numbers)) */



