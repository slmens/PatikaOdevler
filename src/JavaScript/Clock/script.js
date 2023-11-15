let name = prompt("İsminiz: ","Polat")
let date = new Date()
let stringDay;
let numberDay = date.getDay();
document.querySelector("#name").innerHTML = name

if(numberDay == 1){
    day = "Pazartesi"
}else if(numberDay == 2){
    day = "Salı"
}else if(numberDay == 3){
    day = "Çarşamba"
}else if(numberDay == 4){
    day = "Perşembe"
}else if(numberDay == 5){
    day = "Cuma"
}else if(numberDay == 6){
    day = "Cumartesi"
}else if(numberDay == 7){
    day = "Pazar"
}

document.querySelector("#date").innerHTML = `${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes()}:${date.getSeconds()} ${day} `

setInterval(() => {
    date = new Date()
    setDate()
}, 1000);


function setDate() {
    document.querySelector("#date").innerHTML = `${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes()}:${date.getSeconds()} ${day} `
}

