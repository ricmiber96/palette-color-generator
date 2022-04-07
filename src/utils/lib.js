export function generateColors(num){

    let arrayColors = []
	let color = '#'
    
    for(var i=0;i<num;i++){     
        for(var j=0;j<6;j++){
            let number = Math.floor(Math.random() *  (15 - 0) + 0)
            if(number >= 10){
                switch(number){
                    case 10: color = color + "A"; break;
                    case 11: color = color + "B"; break;
                    case 12: color = color + "C"; break;
                    case 13: color = color + "D"; break;
                    case 14: color = color + "E"; break;
                    case 15: color = color + "F"; break;  
                }
            }else {
                color = color + number
            }
        }

        arrayColors.push(color)
        color = '#'
    }
    return arrayColors
}