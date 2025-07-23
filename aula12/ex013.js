var agora= new Date()
var diaSem = agora.getDay()

diaSem = 6

switch(diaSem){
    case 0:
    console.log('domingo')
    break
   
    case 1:
        console.log('segunda-feira')
        break
        
        case 2:
         console.log('terca')
            break
            
         case 3:
          console.log('quata')
             break
            
         case 4:
          console.log('quinta')
             break
                
           case 5:
             console.log('sexta')
             break
            case 6:
              console.log('sabado')
              break
            
              default :
              console.log('ERRO dia invalido')
              break
}