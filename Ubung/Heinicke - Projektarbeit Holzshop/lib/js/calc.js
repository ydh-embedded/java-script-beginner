window.onload = function() {
	document.getElementById("calc").onclick = umrechnen;
};

function umrechnen() {
	var menge = document.getElementById("Summe").formstarke.value;


	with (document.getElementById("Summe")) {






		switch (einheit.options.selectedIndex) {
			case 0:
				tausender = 1;
				break;
			case 1:
				tausender = 1000;
				break;
			case 2:
				tausender = 1000 * 1000;
				break;
			case 3:
				tausender = 1000 * 1000 * 1000;
				break;
			case 4:
				tausender = 1000 * 1000;
				break;
			case 5:
				tausender = 1000 * 1000 * 100;
		}
		cmm.value = menge * tausender;
		ccm.value = menge * tausender / 1000;
		cdm.value = menge * tausender / 1000 / 1000;
		cm.value = menge * tausender / 1000 / 1000 / 1000;
		liter.value = menge * tausender / 1000 / 1000;
		hektoliter.value = menge * tausender / 1000 / 1000 / 100;
	}
};
