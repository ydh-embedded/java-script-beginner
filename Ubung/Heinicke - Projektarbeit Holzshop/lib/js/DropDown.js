window.onload = function() {
	/* durchlauf(); */
	/* document.getElementsByName("DropDownFeld")[0].onchange = durchlauf; */
};

function durchlauf() {
	var ausgabe = "";


/* 				var liste = document.getElementsByName("auswahl")[0]; */
				var liste = document.getElementsByName("DropDownFeld")[0];							/* zeigt eigenschaften des listen objectes an */

				for ( i = 0; i < liste.length; i++) {
					ausgabe += 'index: ' 				+ liste.options[i].index 			+ '<br>'	;
					ausgabe += 'defaultSelected: ' 		+ liste.options[i].defaultSelected 	+ '<br>';
					ausgabe += 'selected: ' 			+ liste.options[i].selected 		+ '<br>';
					ausgabe += 'text: ' 				+ liste.options[i].text 			+ '<br>';
					ausgabe += 'value: ' 				+ liste.options[i].value 			+ '<br>' 	+ '<hr>';
				}

				document.getElementById("ausgabe").innerHTML = ausgabe;
			}
