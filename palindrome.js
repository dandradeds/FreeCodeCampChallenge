function palindrome(str) {
    let aux = ''
    let newString = ''
    for(let i = 0; i < str.length; i++){
         aux += str[i].replace(/[ \.(/),_:-]/g,"").toLowerCase()
         console.log(aux);
    }
        for (var x = str.length - 1; x >= 0; x--) { 
            newString += str[x].replace(/[ \.(/),_:-]/g,"").toLowerCase()
            console.log(newString);
    }
    if(aux === newString){
        return true;

    } else {
        return false 
    }

    
  }
  palindrome("0_0 (: /-\ :) 0-0")