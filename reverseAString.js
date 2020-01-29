

const reverseAString = (str) => {
    var arrayOfLetters = str.split('');
    var left = 0;
    var right = arrayOfLetters.length - 1;
    const reversedArrayOfLetters = [];
    for (left = 0; left <= right; right--) {
        reversedArrayOfLetters.push(arrayOfLetters[right])
    }
    return reversedArrayOfLetters.join("")
};

console.log(reverseAString('helloworld'));