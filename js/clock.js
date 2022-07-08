let myName = document.querySelector('#myName')
let myClock = document.querySelector('#myClock')

let promtName = prompt("Lutfen isminizi giriniz")
let today = new Date()
let newClock = `${today.getDate()}:${today.getMonth()}:${today.getFullYear()} - ${today.getHours()}:${today.getMinutes()}`

myName.innerHTML=promtName
myClock.innerHTML = newClock
