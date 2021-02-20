function hide(){
    var get = document.getElementById("cred").value
    if(get.length == 16){
    var number = get.slice(12,16)
     var num = `************${number}`
     document.getElementById("r1").innerHTML = num
     console.log(number);
    }else{
        document.getElementById("r1").innerHTML = `Please Enter Valid Card Number`
    }
}
function potatos(){
    const k = `potato`
    var got =document.getElementById("potato").value
    var geet = got.toLowerCase()
    var get = geet.replace(/ /g, "")
    if(get == `potato`){
      document.getElementById("r2").innerHTML= `1`
      console.log(get);
    }else if(get == `potatopotato`){
        document.getElementById("r2").innerHTML= `2`
    }else if(get ==`potatopotatopotato`){
        document.getElementById("r2").innerHTML= `3`
    }else if(get == `potatopotatopotatopotato`){
        document.getElementById("r2").innerHTML= `4`
    }else if(get == `potatoapple`){
        document.getElementById("r2").innerHTML= `1`
    }else if(get == `potatobananapotato`){
        document.getElementById("r2").innerHTML= `2`
    }
    else if(get== `potatoapplepotatobanana`  ){
        document.getElementById("r2").innerHTML= `2`
    }else{

        document.getElementById("r2").innerHTML= `${get} is not Potato`
    }
   
}
function repeat(){
    var get = document.getElementById("repeat").value
    var got = get.slice(0,1)
    var geet = got.repeat(2)
    var got1 = get.slice(1,2)
    var geet1 = got1.repeat(2)
    var got2 = get.slice(2,3)
    var geet2 = got2.repeat(2)
    var got3 = get.slice(3,4)
    var geet3 = got3.repeat(2)
    var got4 = get.slice(4,5)
    var geet4 = got4.repeat(2)
    var got5 = get.slice(5,6)
    var geet5 = got5.repeat(2)
    var got6 = get.slice(6,7)
    var geet6 = got6.repeat(2)
    var got7 = get.slice(7,8)
    var geet7 = got7.repeat(2)
    var got8 = get.slice(8,9)
    var geet8 = got8.repeat(2)
    var got9 = get.slice(9,10)
    var geet9 = got9.repeat(2)
    var got10 = get.slice(10,11)
    var geet10 = got10.repeat(2)
    var got11 = get.slice(11,12)
    var geet11 = got11.repeat(2)
    var got12 = get.slice(12,13)
    var geet12= got12.repeat(2)
    var got13 = get.slice(13,14)
    var geet13= got13.repeat(2)
    var got14 = get.slice(14,15)
    var geet14= got14.repeat(2)
    var got15 = get.slice(15,16)
    var geet15= got15.repeat(2)
    var got16 = get.slice(16,17)
    var geet16= got16.repeat(2)
    var got17 = get.slice(17,18)
    var geet17= got17.repeat(2)
    var got18 = get.slice(18,19)
    var geet18= got18.repeat(2)
    var got19 = get.slice(19,20)
    var geet19= got19.repeat(2)
    var got20 = get.slice(20,21)
    var geet20= got20.repeat(2)
    var got21 = get.slice(21,22)
    var geet21 = got21.repeat(2)
    var total =geet+geet1+geet2+geet3+geet4+geet5+geet6+geet7+geet8+geet9+geet10+geet11+geet12+geet13+geet14+geet15+geet16+geet17+geet18+geet19+geet20+geet21
    console.log(total);
    document.getElementById("r3").innerHTML =  total
}
function calculate(){
    var get = parseInt(document.getElementById("cal").value)
    if(get <= 10000){
         var HRA = 20
         var DA = 80

var tal = get / 100 * 20 
var total =  tal + get 
console.log(total);
document.getElementById("r4").innerHTML = `Your Gross Salary is ${total}`
    }else if(get <= 20000){
        var HRA = 25
        var DA = 90

var tal = get / 100 * 25 
var total =   tal + get 
console.log(total);
document.getElementById("r4").innerHTML = `Your Gross Salary is ${total}`}else if(get > 20000){
    var HRA = 30
    var DA = 95

var tal = get / 100 * 30 
var total =  tal + get 
console.log(total);
document.getElementById("r4").innerHTML = `Your Gross Salary is ${total}`
}else if(get > 50000){
    var HRA = 35
    var DA = 98

var tal = get / 100 * 35 
var total =   tal + get 
console.log(total);
document.getElementById("r4").innerHTML = `Your Gross Salary is ${total}`} 
}
function units(){
    var get = parseInt(document.getElementById("unit").value)
    if(get <= 50){
        let ru = get * 0.5
        let re = ru / 50 * 20
        let ry = re + ru
        console.log(re);
        console.log(ry);
        document.getElementById("r5").innerHTML = `Your Electricity Bill is ${ry} Rs`
    }else if(get <= 150){
        let ru = get * 0.75
        let re = ru / 100 * 20
        let ry = re + ru
        document.getElementById("r5").innerHTML = `Your Electricity Bill is ${ry} Rs`
    }else if(get <= 250){
        let ru = get * 1.2
        let re = ru / 100 * 20
        let ry = re + ru
        document.getElementById("r5").innerHTML = `Your Electricity Bill is ${ry} Rs`
    }else if(get > 250){
        let ru = get * 1.5
        let re = ru / 100 * 20
        let ry = re + ru
        document.getElementById("r5").innerHTML = `Your Electricity Bill is ${ry} Rs`
    }
}
function multiplicative(){
    var get = document.getElementById("multi").value
    var run = ""
    var sum = 0
    for( let mo = 1 ; mo <= get ; mo++)
    {
    if(mo % 3 === 0 || mo % 5 === 0 ){
     sum =sum+ mo 
     run  = run+ mo
    } 
  
}
console.log(sum);
document.getElementById("r6").innerHTML =`Addition of Multiplicatives of 3 and 5 under ${get} is ${sum}`
}
function count(){
    var get = document.getElementById("ret").value
    var arr =[]
    var object = {}
    for(let k = 0; k < get ; k++){

        var one = prompt(`Enter ${k} index of an Array` )
         arr[k] = one
         console.log(one);
         object[one] = 0
    }
arr.forEach((one)=> {
    object[one] = object[one] + 1
});
console.log(object);
var gog = JSON.stringify(object)
// console.log(gog); 
document.getElementById("r7").innerHTML= gog
}
    function find (){
    var get = document.getElementById(`find`).value
    var get2 = prompt(`Please Enter the Character of String`)
    var  j = 0
for(let k = 0 ; k < get.length ; k++){
    if(get2 == get[k] ){
      j = j+ 1
    }else{
        document.getElementById("r8").innerHTML = "You Character doesn`t match Any Charcter of Given String"
    }

document.getElementById("r8").innerHTML = `Your Character ${get2} is ${j} Times Repeated in String`

}}














