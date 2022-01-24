// function duplicate(str)
// {
//     let New = [];
//     for(let i = 0,k=0;i<str.length;i++,k=k+2)
//     {
//         New[k] = str[i];
//         New[k+1] = str[i];
        
//     }
//     return New;
// }

// // duplicate("NAME");
// console.log(
//     duplicate("abc"));

    // Method 2

    function charDuplicate(str, noOfDuplicates) {
        var newStr = "";
      
        for (let i = 0; i < str.length; i++) {
          newStr += str.charAt(i).repeat(parseInt(noOfDuplicates));
        }
      
        return newStr;
      }
      
      console.log(charDuplicate("abc", 2));
      console.log(charDuplicate("abc", 3));
      console.log(charDuplicate("abc", 4));