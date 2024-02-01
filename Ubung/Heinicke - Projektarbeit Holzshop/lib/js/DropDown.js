window.onload = function() {
	durchlauf();
	document.getElementsByName("DropDownFeld")[0].onchange = durchlauf;
	document.getElementById("form1").action = "test.php" ;
};

function durchlauf() {
	var ausgabe = "";

/* 				zeigt eigenschaften des listen objectes an */
/* 				var liste = document.getElementsByName("auswahl")[0]; */
				var liste = document.getElementsByName("DropDownFeld")[0];

				for ( i = 0; i < liste.length; i++) {
					ausgabe += 'index: ' 				+ liste.options[i].index 			+ '<br>'	;
					ausgabe += 'defaultSelected: ' 		+ liste.options[i].defaultSelected 	+ '<br>';
					ausgabe += 'selected: ' 			+ liste.options[i].selected 		+ '<br>';
					ausgabe += 'text: ' 				+ liste.options[i].text 			+ '<br>';
					ausgabe += 'value: ' 				+ liste.options[i].value 			+ '<br>' 	+ '<hr>';
				}

				document.getElementById("ausgabe").innerHTML = ausgabe;
			}
