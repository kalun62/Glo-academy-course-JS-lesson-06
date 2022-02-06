'use strict'

let userNum  

const isNumber = function(userNum){
    return !isNaN(parseFloat(userNum) && isFinite(userNum))
}

const bot = function(x){
    let defaultNum = 55

    function quest(){
        x = prompt('Угадай число от 1 до 100')

        if(x == null){
            alert('Игра окончена')
            return false
        }
        while(!isNumber(x)){
            alert('Введи число!')
            quest()
        }        
        if(x < defaultNum){
            alert('Загаданное число больше')
            quest()
            return x

        }
        if(x > defaultNum || x > 100){
            alert('Загаданное число меньше')
            quest()
            return x
        }
        if(x == defaultNum){
            alert('Поздравляю, Вы угадали!!!')
            return false
        }
        
    }
    
    quest()

}

bot(userNum)

