"" + 1 + 0             //10
"" - 1 + 0             //-1
true + false         //1
6 / "3"              //2
"2" * "3"            //6
4 + 5 + "px"           //9px
"$" + 4 + 5            //$45
"4" - 2              //2
"4px" - 2            //NaN
7 / 0                //infinity
" -9\n" + 5          //"-9\n5"
" -9\n" - 5          //-14
null + 1             //1
undefined + 1        // NaN
null == "\n0\n"      //false

let s = prompt("Ведите пол (M,F)")
if (s != "M" && s != "F") {
    alert("Get out")
} else {

    let v = prompt("Введите возраст");
    // if (Number(v) > 25) {
    if ((v>25 && s =="M")||(v>18 && s =="F")) {
        alert("добро пожаловать в клуб ")
    } else {
        alert("Идите домой")
    }

}