function isEven(num) {
    return (num % 2 === 0);
}

console.log(isEven(4));
console.log(isEven(5));

function sum(numList) {
    var total = 0;
    for (var i = 0; i < numList.length; i++) {
        total += numList[i];
    }
    return total;
}

console.log(sum([1,2,3,4]));

// Construct a list from those elements of iterable for which function returns true.
function filter(boolFunc, iterable) {
    var new_list = [];
    for (var i in iterable){
        if (boolFunc(iterable[i]) === true) {
            new_list.push(iterable[i]);
        }
    }
    return new_list;
}

testList = [1,2,3,4,5,6,7];

console.log(filter(isEven, testList));

// Return *the sum of even* fibonacci numbers that go up to but not beyond the maximum number provided
function fibonacciSumEven(max) {
    if (max > 1) {
        fibList = [1];
        currentFib = 1;
        while (currentFib < max) {
            fibList.push(currentFib);
            currentFib += fibList[fibList.length - 2];
        }
    }
    var evenFibSum = sum(filter(isEven, fibList));
    return evenFibSum;
}

console.log(fibonacciSumEven(20));