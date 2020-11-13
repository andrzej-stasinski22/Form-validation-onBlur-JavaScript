function sprawdzProdukt()
{
	produktWartosc = document.getElementById("produkt").value;
	if(produktWartosc == "" || produktWartosc == "Produkt")
		{
			document.getElementById("bladProdukt").innerHTML = "Brak Produktu";	
			return false;
		}
		else
		{
			document.getElementById("bladProdukt").innerHTML = "";	
			return true;
		}
		
}
function sprawdzIlosc()
{
	iloscWartosc = document.getElementById("ilosc").value;
	if(iloscWartosc == "" || iloscWartosc == "Ilość")
		{
			document.getElementById("bladIlosc").innerHTML = "Brak ilości";	
			return false;
		}
		else
		{
			if(isNaN(document.getElementById("ilosc").value))
			{
				document.getElementById("bladIlosc").innerHTML = "Ilość ma być liczbą";	
				return false;				
			}
			else
			{
				document.getElementById("bladIlosc").innerHTML = "";
				return true;	
			}
		}
}
function sprawdzImie()
{
	imieWartosc = document.getElementById("imie").value
	if(imieWartosc == "" || imieWartosc == "Imię")
		{
			document.getElementById("bladImie").innerHTML = "Brak imienia";	
			return false;
		}
		else
		{
			document.getElementById("bladImie").innerHTML = "";	
			return true;
		}
}
function sprawdzNazwisko()
{
	nazwiskoWartosc = document.getElementById("nazwisko").value
	if(nazwiskoWartosc == "" || nazwiskoWartosc == "Nazwisko")
		{
			document.getElementById("bladNazwisko").innerHTML = "Brak nazwiska";	
			return false;
		}
		else
		{
			document.getElementById("bladNazwisko").innerHTML = "";
			return true;
		}
}
function sprawdzEmail()
{
	emailWartosc = document.getElementById("email").value
	if (emailWartosc == "" || emailWartosc == "Email") 
	{
		document.getElementById("bladEmail").innerHTML = "Brak e-maila";
		return false;
	}
	else {
		var wzorzec = /.+@.+/;
		//var wzorzec = /[@]/;
		if (document.getElementById("email").value.match(wzorzec)) {
			document.getElementById("bladEmail").innerHTML = "";
			return true;
		}
		else {
			document.getElementById("bladEmail").innerHTML = "Nieprawidłowy e-mail";
			return false;
		}
	}
}			

function regularmin()
{
		if(document.getElementById("regulamin").checked)
		{
			document.getElementById("bladRegulamin").innerHTML = "";
			return true;
		}
		else
		{
			document.getElementById("bladRegulamin").innerHTML = "Nie zaakceptowano Regulaminu";
			return false;
		}
}
window.onload = function()
{

	document.getElementById("zamowienie").onsubmit = function()
	{
	var send = true;
	
	send1 = sprawdzImie();
	send2 = sprawdzNazwisko();
	send3 = regularmin();
	send4 = sprawdzIlosc();
	send5 = sprawdzEmail();
	send6 = sprawdzProdukt();
	
	if(send1 && send2 && send3 && send4 && send5 && send6 == true)
		return true;
		else
		return false;;
	}
	
	// Produkt
	
	var poleProdukt = document.getElementById("produkt");
	poleProdukt.onblur = function()
	{
		if(poleProdukt.value == "")
		{
			document.getElementById("bladProdukt").innerHTML = "Blur - Brak Produktu";
			document.getElementById("produkt").style = "color:lightgray";
			document.getElementById("produkt").value = "Produkt";
		}
		else
		{
			document.getElementById("bladProdukt").innerHTML = "";
		}
	}
	poleProdukt.onfocus = function()
	{
		if(poleProdukt.value == "Produkt")
		{
		poleProdukt.value = "";
		poleProdukt.style = "color:#555";		
		}
	}
	
	// Ilość
	
	var poleIlosc = document.getElementById("ilosc");
	poleIlosc.onblur = function()
	{
		if(poleIlosc.value == "")
		{
			document.getElementById("bladIlosc").innerHTML = "Blur - Brak Ilości";
			document.getElementById("ilosc").style = "color:lightgray";
			document.getElementById("ilosc").value = "Ilość";
		}
		else
		{
			if(isNaN(document.getElementById("ilosc").value))
			{
				document.getElementById("bladIlosc").innerHTML = "Ilość ma być liczbą";	
				return false;				
			}
			else
			{
				document.getElementById("bladIlosc").innerHTML = "";
				return true;	
			}
		}		
	}
	poleIlosc.onfocus = function()
	{
		if(poleIlosc.value == "Ilość")
		{
		poleIlosc.value = "";
		poleIlosc.style = "color:#555";	
		}
	}
	
	// Imię
		
	var poleImie = document.getElementById("imie");
	poleImie.onblur = function()
	{
		if(poleImie.value == "")
		{
			document.getElementById("bladImie").innerHTML = "Blur - Brak Imię";
			document.getElementById("imie").style = "color:lightgray";
			document.getElementById("imie").value = "Imię";
		}
		else
		{
			document.getElementById("bladImie").innerHTML = "";
		}		
	}
	poleImie.onfocus = function()
	{
		if(poleImie.value == "Imię")
		{
		poleImie.value = "";
		poleImie.style = "color:#555";	
		}
	}
		
	// Nazwisko
	
	var poleNazwisko = document.getElementById("nazwisko");
	poleNazwisko.onblur = function()
	{
		if(poleNazwisko.value == "")
		{
			document.getElementById("bladNazwisko").innerHTML = "Blur - Brak Nazwisko";
			document.getElementById("nazwisko").style = "color:lightgray";
			document.getElementById("nazwisko").value = "Nazwisko";
		}
		else
		{
			document.getElementById("bladNazwisko").innerHTML = "";
		}		
	}
	poleNazwisko.onfocus = function()
	{
		if(poleNazwisko.value == "Nazwisko")
		{
		poleNazwisko.value = "";
		poleNazwisko.style = "color:#555";	
		}
	}
		
	// E-mail
	
	var poleEmail = document.getElementById("email");
	poleEmail.onblur = function()
	{
		if(poleEmail.value == "")
		{
			document.getElementById("bladEmail").innerHTML = "Blur - Brak E-mail";
			document.getElementById("email").style = "color:lightgray";
			document.getElementById("email").value = "Email";
		}
		else
		{
		var wzorzec = /.+@.+/;
		//var wzorzec = /[@]/;
		if (document.getElementById("email").value.match(wzorzec)) 
			{
				document.getElementById("bladEmail").innerHTML = "";
				return true;
			}
			else {
				document.getElementById("bladEmail").innerHTML = "Nieprawidłowy e-mail";
				return false;
			}
		}		
	}
	poleEmail.onfocus = function()
	{
		if(poleEmail.value == "Email")
		{
		poleEmail.value = "";
		poleEmail.style = "color:#555";
		}
	}	
					
}

























//function sprawdzImie()
//{
//	document.getElementById("zamowienie").onsubmit = function()
//	{
//		if(document.getElementById("imie").value == "")
//		{
//			document.getElementById("blad").innerHTML = "Uzupełnij imię";
//			return false;
//		}
//		else
//		{
//			document.getElementById("blad").innerHTML = "";
//			return true;
//		}
//	}
//}
//window.onload = function()
//{
//	sprawdzImie();
//}