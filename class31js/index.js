
//     a = parseInt(prompt("Введите первое число"))
//     b = parseInt(prompt("Введите второе число"))
//     c = parseInt(prompt("Введите третье число"))
// function getNumber(){
//     if (a < b && b < c) {
//     console.log(a)
//     }
//     if (c < b && b < a) {
//        console.log(c)
//     }

//     if (b < a && a < c) {
//     console.log(b)
//     }

//     if (c < a && a < b) {
//     console.log(c)
//     }

//     if (a < c && c < b) {
//     console.log(a)
//     }
//     if (b < c && c < a) {
//     console.log(b)
//     }
// }
// getNumber()





a = parseInt(prompt("Введите первое число"))
b = parseInt(prompt("Введите второе число"))
c = parseInt(prompt("Введите третье число"))
function getNumber(a, b, c) {
    for (let getNumber=prompt(a) ; a < b; b < c)
        return getNumber()

    for (let getNumber=(c); c < b; b < a) {
       return getNumber()
    }

    for (let getNumber=(b); b < a; a < c) {
       return getNumber()
    }

}
getNumber()

