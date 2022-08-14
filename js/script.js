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


/* Меню бургер */
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if(iconMenu){
	
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');

	});

}