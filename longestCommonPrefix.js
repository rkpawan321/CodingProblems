// Input : ["dontwanttotalktoyou", "donbosco", "dont", "donkey"];
// Output : 'don'



const listOfWords = ["dontwanttotalktoyou", "donbosco", "dont", "donkey"];

const longestCommonPrefix = (listOfWords) => {
    if (listOfWords.length === 0 ) { return " "}
    if (listOfWords.length === 1 ) { return listOfWords[0] }
    var sortedListOfWords = listOfWords.sort();  //This gives the list in the order how orders are actually present in a word dictionary (alphabet wise)
    const minLengthAmongFirstAndLastString = Math.min(sortedListOfWords[0].length, sortedListOfWords[sortedListOfWords.length - 1].length);
    // You just need to find the common prefix between first and last word since it is a sorted array.
    var i = 0;
    const firstString = sortedListOfWords[0];
    const lastString = sortedListOfWords[sortedListOfWords.length - 1]
    while (i < minLengthAmongFirstAndLastString && firstString[i] === lastString[i]) {
        i ++   // stop iterating through all letters in the firstString until letters are not equal
    }
    const commonPrefix = sortedListOfWords[0].slice(0, i);
    return commonPrefix;
}

console.log(longestCommonPrefix(listOfWords));
