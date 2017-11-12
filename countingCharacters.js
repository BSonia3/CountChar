// function1
function countingCharacters(StringToCount)
{
console.log(StringToCount + " has " +StringToCount.length + " characters ")
}


//function2 to to count the number of times a character appears in a string

function countingCharacters2(stringToCount, characterToFind){
    var characterCount = 0;
    for (var i = 0; 
             i < stringToCount.length; 
             i++){
        if (stringToCount[i] == characterToFind){
            characterCount++;
        }
      }

    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + 
                  characterCount);
}

//function3 to count a series of characters in a string

function countingCharacters3(str, search){    
    var count = 0;
    var numChars = search.length;
    
    var lastIndex = str.length - numChars;
    for (var index = 0; index <= lastIndex; index++){
       var current = str.substring(index, index + numChars);
        if (current == search){            
            count++;
        }
    }
  
  console.log("String to search in: " + str);
  console.log("Characters to find: " + search);
  console.log("Number of times the character appears: " + count);    
} 

// change function3 to count only the number of times the substring appears 

function countingCharacters4(str, search){    
    var count = 0;
    var numChars = search.length;
    
    var lastIndex = str.length - numChars;
    for (var index = 0; index <= lastIndex; index++){
       var current = str.substring(index, index + numChars);
        if (current == search){            
            count++;
        }
    }
    return count;
}