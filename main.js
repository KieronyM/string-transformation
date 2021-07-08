function characterSelector(from, to){
    var input = document.getElementById("textIn").value;
    var output = "";
    for (let index = 0; index < input.length; index++) {
        if (input.charCodeAt(index) >= from && input.charCodeAt(index) <= to) {
            output += input.substring(index, index + 1);
        }
    }
    document.getElementById("textOut").value = output;
}

function characterSelector4Betweens(from, to, from2, to2, from3, to3, from4, to4){
    var input = document.getElementById("textIn").value;
    var output = "";
    for (let index = 0; index < input.length; index++) {
        if ((input.charCodeAt(index) >= from && input.charCodeAt(index) <= to) || (input.charCodeAt(index) >= from2 && input.charCodeAt(index) <= to2) || (input.charCodeAt(index) >= from3 && input.charCodeAt(index) <= to3) || (input.charCodeAt(index) >= from4 && input.charCodeAt(index) <= to4)) {
            output += input.substring(index, index + 1);
        }
    }
    document.getElementById("textOut").value = output;
}

function reverseCapsDoubleDigits() {
    var input = document.getElementById("textIn").value;
    var output = "";
    for (let index = 0; index < input.length; index++) {
        //Convert Lower Case to Upper Case
        if (input.charCodeAt(index) >= 97 && input.charCodeAt(index) <= 122) {
            output += (input.substring(index, index + 1)).toUpperCase();
        }
        //Convert Upper Case to Lower Case
        else if (input.charCodeAt(index) >= 65 && input.charCodeAt(index) <= 90) {
            output += (input.substring(index, index + 1)).toLowerCase();
        }
        //Double Digits
        else if (input.charCodeAt(index) >= 48 && input.charCodeAt(index) <= 57) {
            output += parseInt(input.substring(index, index + 1))*2;
        } else {
            output += input.substring(index, index + 1);
        }
    }
    document.getElementById("textOut").value = output;
}

function removeDuplicateWords() {
    //var words = [];
    var input = document.getElementById("textIn").value;
    var output = "";
    
    words = input.split(" ");
    let uniqueWords = [];

    words.forEach((word) => {
        if(uniqueWords.includes(word) == false){
            uniqueWords.push(word);
        }
    });
    output = uniqueWords.join(" ");
    
    document.getElementById("textOut").value = output;
}
