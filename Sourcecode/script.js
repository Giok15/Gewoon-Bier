
//krijg de gehoverde afbeelding + grote afbeelding (gebruikt bij assortiment.html)
function Assortiment(sender) {	  
	
	ResetAfbeeldingen();
	
	switch(sender) {
		case "prd1":
			document.getElementById("bigImage").src="Afbeeldingen/Assortiment/prd1Big.png";
			document.getElementById("prd1").src="Afbeeldingen/Assortiment/product1Focus.png";
			break;
		case "prd2":
			document.getElementById("bigImage").src="Afbeeldingen/Assortiment/prd2Big.png";
			document.getElementById("prd2").src="Afbeeldingen/Assortiment/product2Focus.png";
			break;
		case "prd3":
			document.getElementById("bigImage").src="Afbeeldingen/Assortiment/prd3Big.png";
			document.getElementById("prd3").src="Afbeeldingen/Assortiment/product3Focus.png";
			break;
		case "prd4":
			document.getElementById("bigImage").src="Afbeeldingen/Assortiment/prd4Big.png";
			document.getElementById("prd4").src="Afbeeldingen/Assortiment/product4Focus.png";
			break;
		case "prd5":
			document.getElementById("bigImage").src="Afbeeldingen/Assortiment/prd5Big.png";
			document.getElementById("prd5").src="Afbeeldingen/Assortiment/product5Focus.png";
			break;
		case "prd6":
			document.getElementById("bigImage").src="Afbeeldingen/Assortiment/prd6Big.png";
			document.getElementById("prd6").src="Afbeeldingen/Assortiment/product6Focus.png";
			break;
	}
}

//reset de gehoverde afbeeldingen naar de normale afbeeldingen (gebruikt bij assortiment.html)
function ResetAfbeeldingen()
{
	document.getElementById("prd1").src="Afbeeldingen/Assortiment/product1.png";
	document.getElementById("prd2").src="Afbeeldingen/Assortiment/product2.png";
	document.getElementById("prd3").src="Afbeeldingen/Assortiment/product3.png";
	document.getElementById("prd4").src="Afbeeldingen/Assortiment/product4.png";
	document.getElementById("prd5").src="Afbeeldingen/Assortiment/product5.png";
	document.getElementById("prd6").src="Afbeeldingen/Assortiment/product6.png";
}

//krijg de dag van vandaag (Gebruikt bij openingstijden.html)
function GetDag()
{
	//vraag datum en van de datum de dag op.
	var datum = new Date();
    var dag = datum.getDay();
	
	//dag word getoond als 1 tot en met 7 == maandag tot en met zondag
	switch(dag) {
		case 1:
			document.getElementById("dagVandaag").innerHTML = "Maandag: Gesloten";
			break;
		case 2:
			document.getElementById("dagVandaag").innerHTML = "Dinsdag: 09:00 tot 18:00";
			break;
		case 3:
			document.getElementById("dagVandaag").innerHTML = "Woensdag: 09:00 tot 18:00";
			break;
		case 4:
			document.getElementById("dagVandaag").innerHTML = "Donderdag: 09:00 tot 18:00";
			break;
		case 5:
			document.getElementById("dagVandaag").innerHTML = "Vrijdag: 09:00 tot 21:00";
			break;
		case 6:
			document.getElementById("dagVandaag").innerHTML = "Zaterdag: 09:00 tot 21:00";
			break;
		case 0:
			document.getElementById("dagVandaag").innerHTML = "Zondag: Gesloten";
			break;
	}
	
	
}
