// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a))
console.log(Array.isArray(b))


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]

function multiplyTwo(targets) {
  return targets.map(t => t*2)
}

console.log(multiplyTwo(a))


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

function joinSpace(targets) {
	return colors.join(" ")
}

function joinPlus(targets) {
	return colors.join("+")
}

function joinComma(targets) {
	return colors.join(",")
}

console.log(joinSpace(colors))
console.log(joinPlus(colors))
console.log(joinComma(colors))


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort((a, b) => b-a))


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

function findMostFrequent(targets) {
    const setA = new Set(a)
    let largest = -1
    let largestLetter = ''
    let len = 0
    for (const element of setA) {
    	len = targets.filter(target => target === element).length
    	if (len > largest) {
        	largest = len
        	largestLetter = element
    	}
    }
    return largestLetter
}

console.log(findMostFrequent(a))