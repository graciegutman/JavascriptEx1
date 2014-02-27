// Given an array in Javascript, 
// write a function that returns any items in the array that are duplicated.

// test data
var votesToGoEatCake = [true, true, true, true];
var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false];

// base case - is list.length < 2 return none/false/empty list

function duplicatesInList(iterable) {
    var new_list = [];
    for (var i = 0; i < iterable.length; i++) {
        // console.log('OUTER LOOP ' + iterable[i]);

        for (var n = i + 1; n < iterable.length; n++) {
            // console.log(n);
            // console.log('INNER LOOP ' + iterable[n]);
            // console.log(' ');
            if (iterable[n] === iterable[i]){
                if (new_list.indexOf(iterable[n]) < 0) {
                new_list.push(iterable[i]);
                break;
                }
            }
        }
    }
    return new_list;
}

// console.log(duplicatesInList(votesToGoEatCake));
console.log(duplicatesInList(randomJunkIFound));

//     if (iterable.length < 2) {
//         return [];
//     }
//     else {
//         var first = iterable[0];
//         var rest = iterable.slice(1, interable.length);
//         // return new_list.push(duplicatesInList(iterable.slice(1, interable.length)));
//     }

// }

