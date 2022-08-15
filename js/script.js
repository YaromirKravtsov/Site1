"use strict"

const isMobile = {
	Andriod: function(){
		return navigator.userAgent.match(/Andriod/i);
	},
	BlackBerry: function(){
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function(){
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function(){
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function(){
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function(){
		return(
			isMobile.Andriod()||
			isMobile.BlackBerry()||
			isMobile.iOS()||
			isMobile.Opera()||
			isMobile.Windows());
	}
};


/* --------------Menu Burger-------------- */
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if(iconMenu){
	
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active'); 
		menuBody.classList.toggle('_active');

	});

}


/* --------------Animation-------------- */
let deg = 0;
setInterval(() => {
	deg++;
	document.getElementById("animatonTwist").style.transform = `rotate(${deg}deg)`
	if(deg== 360) {deg = 0}
}, 10);

new Swiper('.image-slider',{
	navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});
/* --------------Countdown-------------- */
let sec = Number(localStorage.getItem('velueSec'));
if(sec==0){
	sec =59;
}
let velueSec;


let min = Number(localStorage.getItem('velueMin'));
if(min==0){
	min =59;
}
let velueMin;

let hour = Number(localStorage.getItem('velueHour'));
if(hour == 0){
	hour =23;
}
let velueHour;

let day = Number(localStorage.getItem('velueDay'));
if(day == 0){
	day = 4;
}
let velueDay;

setInterval(() => {
   sec--;
if(sec== 0){
    sec =59;
    min--;
}
if(min== 0){
    min =60;
    hour--;
}
if(hour== 0){
    hour =23;
    day--;
}
if(day== 0){
    day =4;

}

}, 1000);   


setInterval(() => {
	velueSec = String(sec);
	localStorage.setItem('velueSec', velueSec);
	let velueSecLocal = localStorage.getItem('velueSec');
	/* --- */
	velueMin = String(min);
	localStorage.setItem('velueMin', velueMin);
	let velueMinLocal = localStorage.getItem('velueMin');
	/* --- */
	velueHour = String(hour);
	localStorage.setItem('velueHour', velueHour);
	let velueHourLocal = localStorage.getItem('velueHour');
	/* --- */
	
	velueDay = String(day);
	localStorage.setItem('velueDay', velueDay);
	let velueDayrLocal = localStorage.getItem('velueDay');
	document.getElementById('counter3').innerHTML = `${velueDayrLocal}:${velueHourLocal}:${velueMinLocal}:${velueSecLocal}`;
	document.getElementById('counter2').innerHTML = `${velueDayrLocal}:${velueHourLocal}:${velueMinLocal}:${velueSecLocal}`;
	document.getElementById('counter1').innerHTML = `${velueDayrLocal}:${velueHourLocal}:${velueMinLocal}:${velueSecLocal}`;
});
/* ------ Tup to up ------ */



let velueUp1 = Number(localStorage.getItem('velueUpFirst1'));
if(velueUp1 == 0)
{
	velueUp1 =1098;
}
document.getElementById('upVal1').innerHTML = `${String(velueUp1).substr(0, 1)} ${String(velueUp1).substr(1, 3)} `;
let velueUpFirst1;

let bet1 = Number(localStorage.getItem('betString1'));
if(bet1 == 0)
{
	bet1 =18950;
}
let betString1;

document.getElementById('RaiseTheBet1').innerHTML = `${String(bet1).substr(0, 2)} ${String(bet1).substr(2, 3)} `;


const tupUp1 = document.getElementById("up1");
tupUp1.addEventListener("click", function(){
	velueUp1++;
	velueUpFirst1 = String(velueUp1);
	localStorage.setItem('velueUpFirst1', velueUpFirst1);
	let velueUpFirst1Local = localStorage.getItem('velueUpFirst1');
	document.getElementById('upVal1').innerHTML = `${velueUpFirst1Local.substr(0, 1)} ${velueUpFirst1Local.substr(1, 3)} `;




		bet1 += 10;
		betString1 = String(bet1);
		localStorage.setItem('betString1', betString1);
		let betString1Local = localStorage.getItem('betString1');
		document.getElementById('RaiseTheBet1').innerHTML = `${betString1Local.substr(0, 2)} ${betString1Local.substr(2, 3)} `;
	
});
/* ------------- */

let velueUp2 = Number(localStorage.getItem('velueUpFirst2'));
if(velueUp2 == 0)
{
	velueUp2 =1932;
}
document.getElementById('upVal2').innerHTML = `${String(velueUp2).substr(0, 1)} ${String(velueUp2).substr(1, 3)} `;
let velueUpFirst2;

let bet2 = Number(localStorage.getItem('betString2'));//60460
if(bet2 == 0)
{
	bet2 =2350;
}
let betString2;

document.getElementById('RaiseTheBet2').innerHTML = `${String(bet2).substr(0, 1)} ${String(bet2).substr(1, 3)} `;



const tupUp2 = document.getElementById("up2");
tupUp2.addEventListener("click", function(){

	velueUp2++;
	velueUpFirst2 = String(velueUp2);
	localStorage.setItem('velueUpFirst2', velueUpFirst2);
	let velueUpFirst2Local = localStorage.getItem('velueUpFirst2');
	document.getElementById('upVal2').innerHTML = `${velueUpFirst2Local.substr(0, 1)} ${velueUpFirst2Local.substr(1, 3)} `;




		bet2 += 10;
		betString2 = String(bet2);
		localStorage.setItem('betString2', betString2);
		let betString2Local = localStorage.getItem('betString2');
		document.getElementById('RaiseTheBet2').innerHTML = `${betString2Local.substr(0, 1)} ${betString2Local.substr(1, 3)} `;
});



let velueUp3 = Number(localStorage.getItem('velueUpFirst3'));
if(velueUp3 == 0)
{
	velueUp3 =1700;
}
document.getElementById('upVal3').innerHTML = `${String(velueUp3).substr(0, 1)} ${String(velueUp3).substr(1, 3)} `;
let velueUpFirst3;

let bet3 = Number(localStorage.getItem('betString3'));
if(bet3 == 0)
{
	bet3 =60460;
}
let betString3;

document.getElementById('RaiseTheBet3').innerHTML = `${String(bet3).substr(0, 2)} ${String(bet3).substr(2, 3)} `;

const tupUp3 = document.getElementById("up3");
tupUp3.addEventListener("click", function(){
		velueUp3++;
		velueUpFirst3 = String(velueUp3);
		localStorage.setItem('velueUpFirst3', velueUpFirst3);
		let velueUpFirst3Local = localStorage.getItem('velueUpFirst3');
		document.getElementById('upVal3').innerHTML = `${velueUpFirst3Local.substr(0, 1)} ${velueUpFirst3Local.substr(1, 3)} `;


		bet3 += 10;
		betString3 = String(bet3);
		localStorage.setItem('betString3', betString3);
		let betString3Local = localStorage.getItem('betString3');
		document.getElementById('RaiseTheBet3').innerHTML = `${betString3Local.substr(0, 2)} ${betString3Local.substr(2, 3)} `;
});
