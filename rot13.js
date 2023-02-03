function rot13(str) {
    let aux = ''
        for(let i = 0; i < str.length ; i++){
            
            switch(str[i]){
                case 'A':
                    aux += 'N'
                    break
                case 'B':
                    aux += 'O'
                    break
                case 'C':
                    aux += 'P'
                    break
                case 'D':
                    aux += 'Q'
                    break
                case 'E':
                    aux += 'R'
                    break
                case 'F':
                    aux += 'S'
                    break
                case 'G':
                    aux += 'T'
                    break
                case 'H':
                    aux += 'U'
                    break
                case 'I':
                    aux += 'V'
                    break
                case 'J':
                    aux += 'W'
                    break
                case 'K':
                    aux += 'X'
                    break
                case 'L':
                    aux += 'Y'
                    break
                case 'M':
                    aux += 'Z'
                    break
                case 'N':
                    aux += 'A'
                    break
                case 'O':
                    aux += 'B'
                    break
                case 'P':
                    aux += 'C'
                    break
                case 'Q':
                    aux += 'D'
                    break
                case 'R':
                    aux += 'E'
                    break
                case 'S':
                    aux += 'F'
                    break
                case 'T':
                    aux += 'G'
                    break
                case 'U':
                    aux += 'H'
                    break
                case 'V':
                    aux += 'I'
                    break
                case 'W':
                    aux += 'J'
                    break
                case 'X':
                    aux += 'K'
                    break
                case 'Y':
                    aux += 'L'
                    break
                case 'Z':
                    aux += 'M'
                    break
                case ' ':
                    aux += ' '
                    break
                default :
                    aux += str[i]   
                }
            }

            console.log(aux);
            return str;
            

}
rot13("SERR YBIR?")

  