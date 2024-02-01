window.onload = function() {
	document.getElementById("calc").onclick = umrechnen;
};

function umrechnen() {
/* 	var menge = document.getElementById("Summe").formstarke.value; */
	var starke = document.getElementById("formStarke").value;
	
	console.log(starke);
	alert(starke);
	


	with (document.getElementById("formStarke")) {






		switch (formStarke.options.selectedIndex) {
			case 0:
				starke = 1;
				break;
			case 1:
				starke = 1000;
				break;
			case 2:
				starke = 1000 * 1000;
				break;
			case 3:
				starke = 1000 * 1000 * 1000;
				break;
			case 4:
				starke = 1000 * 1000;
				break;
			case 5:
				starke = 1000 * 1000 * 100;
		}

/* 		cmm.value = menge * tausender;
		ccm.value = menge * tausender / 1000;
		cdm.value = menge * tausender / 1000 / 1000;
		cm.value = menge * tausender / 1000 / 1000 / 1000; */


/* 		liter.value = menge * tausender / 1000 / 1000;
		hektoliter.value = menge * tausender / 1000 / 1000 / 100;
 */



	}
};
