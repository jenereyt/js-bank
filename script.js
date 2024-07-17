let name = 'Alex'
let money = 10000
let account = 7777

let quest = prompt('Как вас зовут')
if(quest.toLowerCase() === name.toLowerCase()){
    let number = prompt('Номер счета?')
    if(number == account){
    let howMuch = prompt('Сколько обналичить?')
    if(howMuch <= money){
        alert('Все отлично')
        let result = money - howMuch
        confirm('Снял: ' + howMuch + ' , Осталось: ' + result)        
    }else{
        alert('Недостаточно средств')
    }
    }else{
        alert('Аккаунт ' + number + ' не найден, досвидули' )
    }
}else{
    alert('Пользователь ' + quest + ' не найден, досвидули')
}