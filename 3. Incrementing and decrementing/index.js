let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

const add3Points = () => {
    myPoints = myPoints + 3
}

const remove1Point = () => {
    myPoints = myPoints - 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()


// Call the functions to that the line below logs out 10
console.log(myPoints)

