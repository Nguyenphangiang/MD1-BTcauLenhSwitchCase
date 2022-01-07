
let result;
function count(){
    let month = Number(document.getElementById("month").value);
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result = "Tháng 1,3,5,7,8,10,12 có 31 ngày"
            break;
        case 2:
            result = "Tháng 2 có 28 hoặc 29 ngày"
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            result = "Tháng 4,6,9,11 có 30 ngày"
            break;
}
    document.getElementById("result").innerText=result;
}
