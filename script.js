const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

/**  
 * When the #text-input element only contains 
 * the letter A and the #check-btn element is clicked, 
 * the #result element should contain the text 
 * "A is a palindrome"
 * 
*/

checkBtn.addEventListener("click", () => {
    const inputValue = textInput.value;
    if (inputValue.length === 0) {
        alert("Please input a value");
        return;
    }
    if (palindromeCheck(inputValue)) {
        result.innerHTML = `
        <p>${inputValue} is a palindrome</p>
        `;
    } else {
        result.innerHTML = `
        <p>${inputValue} is not a palindrome</p>
        `
    }
    
});

const palindromeCheck = (phrase) => {
    const toCheck = phrase
                    .toLowerCase()
                    .replace(/[.,\/?#!$%\^&\*;:{}=\-_`~()]/g,"")
                    .replaceAll(" ", "");
    const reversed = toCheck
                    .split("")
                    .reverse()
                    .join("");
    return toCheck === reversed;
};




    // console.log(toCheck);
    // const lowerCased = phrase.toLowerCase();
    // const removedPunctuation = lowerCased.replace();
    // console.log(removedPunctuation);
    // const trimmed = removedPunctuation.trim();
    // const noWhiteSpace = trimmed
    // console.log(noWhiteSpace);