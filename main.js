"use strict";


var spurning = "Hvernig pizzu villtu ?";

var elSpurning = document.getElementById("question");

// Notum DOM JS aðferð textContent til að færa streng yfir í index.html
elSpurning.textContent = spurning;

// DOM innerHTML JS aðferð getur blandað saman streng og html element  
elSpurning.innerHTML = "<em>" + spurning + "</em>";

var val1 = "DOMINO'S CLASSIC - pepperoni, græn paprika, laukur, sveppir";
 var elval1 =document.getElementById("val-1");
 elval1.textContent = val1;
 elval1.innerHTML = " <input type = checkbox>" + val1 + " <br>  lítil <input type = radio >  mið <input type = radio> stór <input type = radio>" ;

 var val2 = "DOMINO'S CLASSIC ++ - Auka pepperoni, Auka græn paprika, Auka laukur, Auka sveppir";
 var elval2 =document.getElementById("val-2");
 elval2.textContent = val2;
 elval2.innerHTML = " <input type = checkbox>" + val2 + " <br>  lítil <input type = radio >  mið <input type = radio> stór <input type = radio>" ;

var val3 = "FESTIVAL - pepperoni, rjómaostur, jalapeno, nachos flögur, rauðlaukur, fajitas kjúklingur";
 var elval3 =document.getElementById("val-3");
 elval3.textContent = val3;
 elval3.innerHTML = " <input type = checkbox>" + val3 + " <br>  lítil <input type = radio >  mið <input type = radio> stór <input type = radio>" ;

var val4 = "SMOKY BEARNAISE - hakk, cheddarostur, oregano, laukur, rauðlaukur, sveppir, chili-bearnaise";
 var elval4 =document.getElementById("val-4");
 elval4.textContent = val3;
 elval4.innerHTML = " <input type = checkbox>" + val4 + " <br>  lítil <input type = radio >  mið <input type = radio> stór <input type = radio>" ;

var val5 = "ÍTALÍA - ferskur mozzarella, kirsuberjatómatar, basilpestó";
 var elval5 =document.getElementById("val-5");
 elval5.textContent = val5;
 elval5.innerHTML = " <input type = checkbox>" + val5 + " <br>  lítil <input type = radio >  mið <input type = radio> stór <input type = radio>" ;

var val6 = "NEW YORK - hakk, beikonkurl, cheddarostur";
 var elval6 =document.getElementById("val-6");
 elval6.textContent = val6;
 elval6.innerHTML = " <input type = checkbox>" + val6 + " <br>  lítil <input type = radio >  mið <input type = radio> stór <input type = radio>" ;

var val7 = "KJÖTVEISLA - pepperoni, skinka, hakk";
 var elval7 =document.getElementById("val-7");
 elval7.textContent = val7;
 elval7.innerHTML = " <input type = checkbox>" + val7 + " <br>  lítil <input type = radio >  mið <input type = radio> stór <input type = radio>" ;

var val8 = "PEPPERONI VEISLA - pepperoni, auka ostur";
 var elval8 =document.getElementById("val-8");
 elval8.textContent = val8;
 elval8.innerHTML = " <input type = checkbox>" + val8 + " <br>  lítil <input type = radio >  mið <input type = radio> stór <input type = radio>" ;