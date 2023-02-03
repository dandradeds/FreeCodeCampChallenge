function telephoneCheck(str) {

  for(let i = 0; i < str.length; i++){
   let idx = ['*','&','!','#','a','s','d','f','?'].indexOf(str[i])
   let ocorrencias = (str.match(/[()]/g)).length;
   console.log(ocorrencias);
   
   if(idx > 0) {
    console.log('aaaaaaaaaa');
    } 
  } 
   if(str.length > 10 && str.length <= 16){

    console.log('BBBBBBBBB');

        } 
  
  }



  telephoneCheck("1 555)555-5555")