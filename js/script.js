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
let sec = 60;
let min = 59;
let hour = 24;
let day = 4;

setInterval(() => {
   sec--;
if(sec== 0){
    sec =60;
    min--;
}
if(min== 0){
    min =60;
    hour--;
}
if(hour== 0){
    hour =24;
    day--;
}
if(day== 0){
    day =4;

}

}, 1000);   


setInterval(() => {
    document.getElementById('counter3').innerHTML = `${day}:${hour}:${min}:${sec}`;
	document.getElementById('counter2').innerHTML = `${day}:${hour}:${min}:${sec}`;
	document.getElementById('counter1').innerHTML = `${day}:${hour}:${min}:${sec}`;
});
/* ------ Tup to up ------ */
let velueUp1= 1098;
let velueUpFirst1;
let bet =18950;
let betString;
const tupUp1 = document.getElementById("up1");
tupUp1.addEventListener("click", function(){
	velueUp1++;
	velueUpFirst1 = String(velueUp1);
	document.getElementById('upVal1').innerHTML = `${velueUpFirst1.substr(0, 1)} ${velueUpFirst1.substr(1, 3)} `;

	bet += 10;
	betString = String(bet);
	document.getElementById('RaiseTheBet1').innerHTML = `${betString.substr(0, 2)} ${betString.substr(2, 3)} `;
	
});
let velueUp2= 1932;
let velueUpFirst2;
let bet2 =2350;
let betString2;

const tupUp2 = document.getElementById("up2");
tupUp2.addEventListener("click", function(){
	velueUp2++;
	velueUpFirst2 = String(velueUp2);
	document.getElementById('upVal2').innerHTML = `${velueUpFirst2.substr(0, 1)} ${velueUpFirst2.substr(1, 3)} `;

		bet2 += 10;
		betString2 = String(bet2);
		document.getElementById('RaiseTheBet2').innerHTML = `${betString2.substr(0, 1)} ${betString2.substr(1, 3)} `;
});



let velueUp3 = Number(localStorage.getItem('velueUpFirst3'));
if(velueUp3 == 0)
{
	velueUp3 =1700;
}
document.getElementById('upVal3').innerHTML = `${String(velueUp3).substr(0, 1)} ${String(velueUp3).substr(1, 3)} `;
let velueUpFirst3;

let bet3 = 60460;
let betString3;

const tupUp3 = document.getElementById("up3");
tupUp3.addEventListener("click", function(){
		velueUp3++;
		velueUpFirst3 = String(velueUp3);
		localStorage.setItem('velueUpFirst3', velueUpFirst3);
		let velueUpFirst3Local = localStorage.getItem('velueUpFirst3');
		document.getElementById('upVal3').innerHTML = `${velueUpFirst3Local.substr(0, 1)} ${velueUpFirst3Local.substr(1, 3)} `;


		bet3 += 10;
		betString3 = String(bet3);
		document.getElementById('RaiseTheBet3').innerHTML = `${betString3.substr(0, 2)} ${betString3.substr(2, 3)} `;
});
/* console.log(Number(localStorage.getItem('velueUpFirst3') */
/* velueUp3 = Number(localStorage.getItem('velueUpFirst3')) */
/* bet3 =localStorage.getItem('velueUpFirst3'); */
/* Local Sorage */
/* let hello = "Hell1";
localStorage.setItem('myCat', hello);
let cat = localStorage.getItem('myCat');
console.log(cat) */
