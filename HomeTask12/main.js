//Task1
// I write 2 versions of this task one ofe them is function as you mentioned 
// let text = "Robin Singh"
// const myText = text.trim().split(" ")
// console.log(myText);

// function splitTextIntoArray(text) {
//     return text.trim().split(" ")
// }
// console.log("Robin Singh");


//Task2
// function textChecker(text, num){
//     if(num >= text.length){
//         return text  
//     }
//     else{
//         return text.slice(0, num)
//     }
// }
// console.log(textChecker("Robin Singh",4));


//Task3
// function emailChecker(email){
//     let [username, mailpart] = email.split("@")
//     let hiddenusernamepart = username.slice(0,5)
//     let hiddenemail = hiddenusernamepart + '...@' + mailpart
//     return hiddenemail
// }
// console.log(emailChecker("robin_singh@example.com"));


//Task4
// function stringRepeater(text, count){
//     if(isNaN(count)){
//         console.log("Error in string or count.")
//     }
//     return text.repeat(count)
// }
// console.log(stringRepeater("a",4));


//Task5
// function wordFinder(text, searchWord){
//     const myArray = text.split(/\s|,/)//Here i used a Regex code because of commas(,) in the text without this Regex code it is not showinng texts which have comma(,) next to text
//     let counter = 0
    
//     for (let index = 0; index < myArray.length; index++) {
//         if(myArray[index].toLowerCase() === searchWord.toLowerCase()){
//             counter++
//         }
//     }
//     return `'${searchWord}' was found ${counter} times.`
    
// }
// console.log(wordFinder('The quick brown fox', 'fox'));
// console.log(wordFinder('aa, bb, cc, dd, aa', 'aa'));