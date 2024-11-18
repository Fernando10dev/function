
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d")

canvas.width = "2000"
canvas.height = "3000"

var width = canvas.width
var height = canvas.height

var cien =Math.random() > 0.5


 // true
 // horizontal - vertical
var variation2horizontal =Math.floor(Math.random() * 13) + 1;
var variacion100unovertical=Math.floor(Math.random() * 6) + 1;
var combinacion

/// vertical - horizontal
var variation2vertical=Math.floor(Math.random() * 15) + 1;
var variacion100unohorizontal=Math.floor(Math.random() * 6) + 1;


//false
 // horizontal - vertical
var variation1horizontal=Math.floor(Math.random() * 13) + 1;
var variacion100dosvertical=Math.floor(Math.random() * 6) + 1;

/// vertical - horizontal
var variation1vertical=Math.floor(Math.random() * 14) + 1;
var variacion100doshorizontal=Math.floor(Math.random() * 7) + 1;


var colorpuntos = Math.random() > 0.5
var texturas=Math.floor(Math.random() * 3) + 1;


var colors =Math.floor(Math.random() * 11) + 1;



var timemarco
var colorlinea1
var colorlinea2
var colorstroke
var fondo
var widhtlinea
var colortexture
var colorlinea1final
var colorlinea2final

var sizeArc
var colormarco
var paletteName
var spacelinea1
var spacelinea2

var colores1
var colores2
var colores3
var widhtlineasombra1
var widhtlineasombra2

var a
var b
var c
var d
var a2
var b2
var c2
var d2

// IF CIEN TRUE 
// HORIZONTAL - VERTICAL
var horizontalvertical =Math.random() > 0.5
var sombrasi
var sombrasi2

if(cien==true){
if(horizontalvertical==true){
	switch (variacion100unovertical) {
		case 1:
			a = 6.8514436823315918
			b = 0.5888060880824924
			c = -12.5174689972773194
			d = 4.1674787630327046
			spacelinea1=15
			break
		case 2:
			a = 2.8815196929499507
			b = 0.2058718614280224
			c = -12.8171319286338985
			d = -6.546682484447956
			spacelinea1=20
			break
		case 3:
			a = 4.8815196929499507
			b = -4.2058718614280224
			c = -15.8171319286338985
			d = 0.546682484447956
			spacelinea1=15
			break
		case 4:
			a = 4.756654120516032
			b = -4.3544305167160928
			c = -10.7169969594106078
			d = 0.6160101173445582
			spacelinea1=20
			break
		case 5:
			a = 6.5890709953382611
			b = -4.3875482575967908
			c = -6.97772666066885
			d = 0.5136174680665135
			spacelinea1=15
			break
		case 6:
			a = 5.22632300946861506
			b = -18.998602637089789
			c = -18.1172339087352157
			d = 0.13046064041554928
			spacelinea1=20
			break
	}
	switch (variation2horizontal) {
		case 1:
			a2 = 0.187715573236346
			b2 = 1.9404448550194502
			c2 = -2.337606677785516
			d2 = -10.4613714274019
			time=0
			break
		case 2:
			a2 = 0.1995132900774479
			b2 = 1.9749908708035946
			c2 = 4.8673745319247246
			d2 = -50.740851428359747
			break
		case 3:
			a2 =0.8548119105398655
			b2 = 1.055977534502745
			c2 = 0.722267022356391
			d2 = -6.885488012805581
			break
		case 4:
			a2 = 0.1110473917797208
			b2 = 6.766725444700569
			c2 = -8.3966122609563172
			d2 = -80.4589977567084134
			break
		case 5:
			a2 = 0.756654120516032
			b2 = -1.3544305167160928
			c2 = 0.7169969594106078
			d2 = -12.6160101173445582
			break
		case 6:
			a2 = 5.9815549403429031
			b2 = -6.2999475905671716
			c2 = 1.0595069732517004
			d2 = 8.848323905840516
			break
		case 7:
			a2 = 0.5890709953382611
			b2 = 4.3875482575967908
			c2 = -4.97772666066885
			d2 = 14.5136174680665135
			break
		case 8:
			a2 = 0.22632300946861506
			b2 = 2.998602637089789
			c2 = 3.1172339087352157
			d2 = -20.13046064041554928
			break
		case 9:
			a2 = 0.3307741675525904
			b2 = -1.5680117942392826
			c2 = 1.770188855007291
			d2 = -50.1199025185778737
			break
		case 10:
			a2 = -1.0973918689414859
			b2 = -2.4711126433685422
			c2 = 0.6726554213091731
			d2 = -12.6599231036379933
			break
		case 11:
			a2 = 1.7256193142384291
			b2 = 0.8642701217904687
			c2 = 0.7318438403308392
			d2 = -10.325949128717184
			break
		case 12:
			a2 = 0.05147037003189325
			b2 = -5.2299857567995787
			c2 = 2.1347210248932242
			d2 = 10.3919143434613943
			break
		case 13:
			a2 = 0.28492845222353935
			b2 = -1.9074416141957045
			c2 = 1.2350000450387597
			d2 = 28.3264010986313224
			break
	
	}
	sombrasi=false
	sombrasi2=true
	combinacion=1+"HV: "+variacion100unovertical+"/"+variation2horizontal
}else{
	switch (variacion100unohorizontal) {
		case 1:
			a = -0.8548119105398655
			b = 8.055977534502745
			c = 5.722267022356391
			d = -19.885488012805581
			spacelinea1=20
			break
		case 2:
			a = 0.1110473917797208
			b = 2.766725444700569
			c = -2.3966122609563172
			d = -9.4589977567084134
			spacelinea1=20
			break
		case 3:
			a = 0.0973918689414859
			b = 1.4711126433685422
			c = 0.6726554213091731
			d = -2.6599231036379933
			spacelinea1=80
			break
		case 4:
			a = 0.7256193142384291
			b = -4.8642701217904687
			c = -50.7318438403308392
			d = -120.325949128717184
			spacelinea1=50
			break
		case 5:
			a = 0.05147037003189325
			b = -3.2299857567995787
			c = -50.1347210248932242
			d = -206.3919143434613943
			spacelinea1=50
			break
		case 6:
			a = 0.28492845222353935
			b = 4.9074416141957045
			c = -30.2350000450387597
			d = 100.3264010986313224
			spacelinea1=50
			break
	}	
	switch (variation2vertical) {
		case 1:
			a2 = 1.6347421258687973
			b2 = 0.698444627225399
			c2 = -40.21430087834596634
			d2 = 0.109602903947234
			break
		case 2:
			a2 = 1.4271715600043535
			b2 = 0.0759639274328947
			c2 = -10.4619524627923965
			d2 = -3.3744596634060144
			break
		case 3:
			a2 = 1.3532955683767796
			b2 = 0.646966116502881
			c2 = -20.20420476980507374
			d2 = 2.8729304149746895
			break
		case 4:
			a2 = -1.3231516149826348
			b2 = -0.603648676071316
			c2 = -24.6540784575045109
			d2 = 0.1380988243035972
			break
		case 5:
			a2 = 2.8514436823315918
			b2 = 0.5888060880824924
			c2 = -9.5174689972773194
			d2 = 1.1674787630327046
			break
		case 6:
			a2 = -1.8815196929499507
			b2 = 0.2058718614280224
			c2 = -143.8171319286338985
			d2 = 0.546682484447956
			break
		case 7:
			a2 = -3.02426251955330372
			b2 = 5.563545724377036
			c2 = -67.7061187969520688
			d2 = -3.6028803302906454
			break
		case 8:
			a2 = -2.6306922445073724
			b2 = 8.689830033108592
			c2 = -70.6883777575567365
			d2 = -3.258106547407806
			break
		case 9:
			a2 = 3.816971402615309
			b2 = 2.90076585393399
			c2 = 10.7103992011398077
			d2 = -1.16316360421478748
			break
		case 10:
			a2 = -2.8344286223873496
			b2 = 1.615491408854723
			c2 = 4.5017020609229803
			d2 = 0.6523337857797742
			break
			case 11:
			a2 = 2.6347421258687973
			b2 = 0.698444627225399
			c2 = -100.21430087834596634
			d2 = 1.109602903947234
			break
			case 12:
			a2 = 4.6347421258687973
			b2 = 0.698444627225399
			c2 = -100.21430087834596634
			d2 = 1.109602903947234
			break
			case 13:
			a2 = -5.0347421258687973
			b2 = 0.098444627225399
			c2 = -10.41430087834596634
			d2 = -5.109602903947234
			break
			case 14:
				a2 = 2.8344286223873496
				b2 = 2.615491408854723
				c2 = 10.5017020609229803
				d2 = 0.6523337857797742
			break
			case 15:
			a2 = 2.8815196929499507
			b2 = 0.2058718614280224
			c2 = -10.8171319286338985
			d2 = -4.546682484447956
			break	
	
	}
	sombrasi=true
	sombrasi2=true
	combinacion=1+"VH: "+variacion100unohorizontal+"/"+variation2vertical
}
}

/// CIEN FALSE	
if(cien==false){
	if(horizontalvertical==true){
		switch (variation1horizontal) {
		
			case 1:
				a2 = 0.3532955683767796
				b2 = -4.946966116502881
				c2 = -8.20420476980507374
				d2 = -25.8729304149746895
				break
			case 2:
				a2 = -0.8548119105398655
				b2 = 8.055977534502745
				c2 = 5.722267022356391
				d2 = -19.885488012805581
				break
			case 3:
				a2 = 0.1110473917797208
				b2 = 2.766725444700569
				c2 = -2.3966122609563172
				d2 = -9.4589977567084134
				break
			case 4:
				a2 = 0.3307741675525904
				b2 = -3.5680117942392826
				c2 = 4.770188855007291
				d2 = -20.1199025185778737
				break
			case 5:
				a2 = 0.4816971402615309
				b2 = 1.90076585393399
				c2 = 1.7103992011398077
				d2 = 40.16316360421478748
				break
			case 6:
				a2 = 0.9479058757424355
				b2 = -1.6248723277822137
				c2 = 2.2614407427608967
				d2 = 10.9174839705228806
				break
			case 7:
				a2 = 0.0973918689414859
				b2 = 4.4711126433685422
				c2 = -4.6726554213091731
				d2 = -15.6599231036379933
				break
			case 8:
				a2 = 0.7256193142384291
				b2 = -1.8642701217904687
				c2 = -50.7318438403308392
				d2 = -320.325949128717184
				break
			case 9:
				a2 = 0.05147037003189325
				b2 = 2.2299857567995787
				c2 = -10.1347210248932242
				d2 = 156.3919143434613943
				break
			case 10:
				a2 = 0.28492845222353935
				b2 = -3.9074416141957045
				c2 = -6.2350000450387597
				d2 = 50.3264010986313224
				break
			case 11:
				a2 = 3.48264819756150246
				b2 = 1.06408051401376724
				c2 = -1.4909587949514389
				d2 = -40.3935917941853404
				break
				case 12:
				a2 = 0.28492845222353935
				b2 = -5.9074416141957045
				c2 = -6.2350000450387597
				d2 = 50.3264010986313224
				break
				case 13:
					a2 =0.8548119105398655
					b2 = 4.055977534502745
					c2 = 4.722267022356391
					d2 = -9.885488012805581
				break	
		
		}
		switch (variacion100dosvertical) {
			case 1:
				a = 4.4271715600043535
				b = 0.0759639274328947
				c = -6.4619524627923965
				d = 12.3744596634060144
				spacelinea1=20
				break
			case 2:
				a = -1.3231516149826348
				b = -0.603648676071316
				c = -24.6540784575045109
				d = 0.1380988243035972
				spacelinea1=20
				break
			case 3:
				a = 2.8514436823315918
				b = 0.5888060880824924
				c = -9.5174689972773194
				d = 1.1674787630327046
				spacelinea1=20
				break
			case 4:
				a = -16.02426251955330372
				b = 0.563545724377036
				c =8.7061187969520688
				d = 6.6028803302906454
				spacelinea1=20
				break
			case 5:
				a = -6.6306922445073724
				b = 0.689830033108592
				c = -4.6883777575567365
				d = 3.258106547407806
				spacelinea1=20
				break
				case 6:
				a = -8.6306922445073724
				b = 0.689830033108592
				c = -8.6883777575567365
				d = 4.258106547407806
				spacelinea1=10
				break	
		
		}
		sombrasi2=true
		sombrasi=false
		combinacion=2+"HV: "+variacion100dosvertical+"/"+variation1horizontal
	}else{
		switch (variation1vertical) {
			case 1:
				a2 = -3.187715573236346
				b2 = 2.9404448550194502
				c2 = 6.337606677785516
				d2 = 0.4613714274019
				break
			case 2:
				a2 = 1.6347421258687973
				b2 = 10.698444627225399
				c2 = -50.21430087834596634
				d2 = 1.109602903947234
				break
			case 3:
				a2 = -1.6306922445073724
				b2 = 2.689830033108592
				c2 = -100.6883777575567365
				d2 = -2.258106547407806
				break
			case 4:
				a2 = 5.4271715600043535
				b2 = 5.0759639274328947
				c2 = -30.4619524627923965
				d2 = -1.3744596634060144
				break
			case 5:
				a2= -8.3231516149826348
				b2 = 2.603648676071316
				c2 = -33.6540784575045109
				d2 = -3.1380988243035972
				break
			case 6:
				a2 = 1.8514436823315918
				b2 = 0.5888060880824924
				c2 = -7.5174689972773194
				d2 = 1.1674787630327046
				break
			case 7:
				a2 = 1.8815196929499507
				b2 = 0.2058718614280224
				c2 = -30.8171319286338985
				d2 = -4.546682484447956
				break
			case 8:
				a2 = 6.8344286223873496
				b2 = 2.615491408854723
				c2 = 10.5017020609229803
				d2 = -1.6523337857797742
				break
			case 9:
				a2 = -4.756654120516032
				b2 = -1.3544305167160928
				c2 = -7.7169969594106078
				d2 = 0.6160101173445582
				break
			case 10:
				a2 = -1.6306922445073724
				b2 = 5.689830033108592
				c2 = -100.6883777575567365
				d2 = -1.258106547407806
				break
			case 11:
				a2 = -1.6306922445073724
				b2 = 2.689830033108592
				c2 = -100.6883777575567365
				d2 = -1.258106547407806
				break
			case 12:
				a2 = 6.5890709953382611
				b2 = -3.3875482575967908
				c2 = -10.97772666066885
				d2 = 2.5136174680665135
				break
			case 13:
				a2 = 2.22632300946861506
				b2 = 2.998602637089789
				c2 = 1.1172339087352157
				d2 = 1.13046064041554928
				break
			case 14:
				a2 = 5.22632300946861506
				b2 = -18.998602637089789
				c2 = -18.1172339087352157
				d2 = 0.13046064041554928
			break	
		}
		switch (variacion100doshorizontal) {
			case 1:
				a = 0.187715573236346
				b = 0.9404448550194502
				c = -2.337606677785516
				d = -7.4613714274019
				spacelinea1=100
				break
			case 2:
				a = 0.3532955683767796
				b = 8.646966116502881
				c = -20.20420476980507374
				d = -200.8729304149746895
				spacelinea1=50
			break
			case 3:
				a = 0.1110473917797208
				b = 5.766725444700569
				c = -33.3966122609563172
				d = -200.4589977567084134
				spacelinea1=50
				break
			case 4:
				a = -0.8548119105398655
				b = 4.055977534502745
				c = 0.722267022356391
				d = -4.885488012805581
				spacelinea1=100
				break
			case 5:
				a = -1.0973918689414859
				b = 1.4711126433685422
				c = 1.6726554213091731
				d = -8.6599231036379933
				spacelinea1=100
				break
				case 6:
					a = 0.7256193142384291
					b = 3.8642701217904687
					c = 40.7318438403308392
					d = -150.325949128717184
					spacelinea1=50
				case 7:
						a = 0.28492845222353935
						b = -3.9074416141957045
						c = 10.2350000450387597
						d = 50.3264010986313224
						spacelinea1=50
						break
	
		}
		sombrasi2=true
		sombrasi=true
		combinacion=2+"VH: "+variacion100doshorizontal+"/"+variation1vertical
	}
	
}


var sombrafinal1
var sombrafinal2

spacelinea2=5

//COLORES
switch (colors) {
	case 1:
		paletteName = "Mariposa en la Bruma"
		colorlinea1 = "#79d2a6"
		colorlinea2 = "#df9fdf"
		fondo = "#f8f2ec"
		colorstroke = "#404040"
		colormarco = "white"
		break
	case 2:
		paletteName = "Fantasia Acuatica"
		colorlinea1 = "#5cd6d6"
		colorlinea2 = "#c266ff"
		fondo = "#f1e6da"
		colorstroke = "#333333"
		colormarco = "white"
		break
	case 3:
		paletteName = "Encanto Costero"
		colorlinea1 = "#00a3cc"
		colorlinea2 = "#dfbf9f"
		colorstroke = "#404040"
		fondo = "#f9f2ec"
		colormarco = "white"
		break
	case 4:
		paletteName = "Calma Maritima"
		colorlinea1 = "#ffffcc"
		colorlinea2 = "#66d9ff"
		colorstroke = "#404040"
		fondo = "#f8f2ec"
		colormarco = "white"
		break
	case 5:
		paletteName = "Sombras de Otoño"
		colorlinea1 = "#ff9966"
		colorlinea2 = "gray"
		colorstroke = "#4d4d4d"
		fondo = "#f2e6d9"
		colormarco = "white"
		break
	case 6:
		paletteName = "Brillo de Verano"
		colorlinea1 = "#ff9900"
		colorlinea2 = "#73b6e6"
		colorstroke = "#404040"
		fondo = "#f1e6da"
		colormarco = "white"
		break
	case 7:
		paletteName = "Hortencia Celestial"
		colorlinea1 = "#99ccff"
		colorlinea2 = "#ff80ff"
		colorstroke = "#404040"
		fondo = "#fff7e6"
		colormarco = "white"
		break
	case 8:
		paletteName = "Menta Resfrescante"
		colorlinea1 = "#8cd9b3"
		colorlinea2 = "#99ffff"
		colorstroke = "#404040"
		fondo = "#f8f2ec"
		colormarco = "white"
		break
	case 9:
		paletteName = "Elegancia Rústica"
		colorlinea1 = "#80bfff"
		colorlinea2 = "#d279d2"
		colorstroke = "#404040"
		fondo = "#f2e6d9"
		colormarco = "white"
		break
	case 10:
		paletteName = "Magencian"
		colorlinea1 = "#4dffff"
		colorlinea2 = "#ff3399"
		colorstroke = "#4d4d4d"
		fondo ="#f1e6da"
		colormarco = "white"
		break
	case 11:
			paletteName = "Ceniza Marina"
			colorlinea1 = "#404040"
			colorlinea2 = "#5cd6d6"
			colorstroke = "#4d4d4d"
			fondo = "#fff7e6"
			colormarco = "white"
			break
						
}

let features = {
    "Color Palette": paletteName,
	"Variation":combinacion,
	"Texture": texturas
    
  };
  console.log(features)

ctx.fillStyle = fondo
ctx.fillRect(0, 0, width, height)



widhtlineasombra1 = 0.01
widhtlineasombra2 = 0.01
sizeArc = 1
colores1 = "gray"
colores2 = "black"
colores3 = "purple"
widhtlinea = 0.1
colortexture = "#333333"

if(colorpuntos==true){
	colorlinea1final=colorlinea1
	colorlinea2final=colorlinea2
}else{
	colorlinea1final=colorlinea2
	colorlinea2final=colorlinea1
}


function textura1() {
	var density = 100;
	var step = width / density;

	for (let i = 0; i < 10000; i++) {
        const x = Math.random() *  width
        const y = Math.random() *  height
        
        ctx.beginPath();
		ctx.fillStyle="black"
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
    }
	for (var x = 0; x <= width; x += step) {
		for (let y = 0; y <= height; y += step) {
			var distance = Math.sqrt(Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2))
			var diameter = map(distance, 0, Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2)), 2, 8)

			ctx.fillStyle = colortexture; 
			ctx.beginPath();
			ctx.globalAlpha = 1
			ctx.arc(x, y, diameter / 4, 0, Math.PI * 2);
			ctx.fill();
			ctx.closePath();
		}
	}

	function map(value, start1, stop1, start2, stop2) {
		return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
	}
	ctx.globalAlpha = 0.1
}

function textura2() {
	ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)'; 
	ctx.lineWidth = 0.4;
  
	
	for (var i = 10; i < height; i += Math.random() * 10) {
	  ctx.beginPath();
	  ctx.moveTo(0, i);
	  ctx.lineTo(width, i);
	  ctx.stroke();
	}

	for (var j = 10; j < width; j += Math.random() *  10) {
	  ctx.beginPath();
	  ctx.moveTo(j, 0);
	  ctx.lineTo(j, height);
	  ctx.stroke();
	}
  
	ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
	for (var k = 0; k < 500; k++) {
	  var x = Math.random() *  width
	  var y = Math.random() *  height
	  ctx.beginPath();
	  ctx.arc(x, y, 0.5, 0, Math.PI * 2);
	  ctx.fill();
	}
	ctx.globalAlpha = 0.1

}

function textura3() {
    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = 40;
    textureCanvas.height = 40;

    const textureCtx = textureCanvas.getContext('2d');
    textureCtx.fillRect(0, 0, textureCanvas.width, textureCanvas.height);
    textureCtx.fillStyle = "white"

    for (let i = 0; i < 40; i++) {
        const x = Math.random() *  40;
        const y = Math.random() *  40 ;
        textureCtx.fillRect(x, y, 5, 5);
    }

    const pattern = ctx.createPattern(textureCanvas, 'repeat');
    ctx.fillStyle = pattern;
    ctx.globalAlpha = 0.1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.1;
}

function cambiarColor() {
	ctx.globalAlpha = 1
}


function lineas() {

	var points = [];
	for (var y = 0; y < height; y += spacelinea1) {
		points.push({
			x: -10,
			y: y,
			vx: 2,
			vy: 2
		})
	};
	var startTime = Date.now();
	render();

	function render() {
		var elapsedTime = Date.now() - startTime;
		if (elapsedTime > 30000) return;

		for (var i = 0; i < points.length; i++) {
			
			var colores = [colores1, colores2, colores3]
		var colorfinal = colores[Math.floor(Math.random() * colores.length)]
			var sizelinea =Math.random() *  300
			

			var p = points[i];
			var value = getValue(p.x, p.y);
			p.vx += Math.cos(value) * 0.6;
			p.vy += Math.sin(value) * 0.6;

			ctx.beginPath()
			ctx.lineWidth = widhtlinea
			ctx.strokeStyle = colorstroke
			ctx.fillStyle = colorlinea1final
			ctx.moveTo(p.x, p.y);
			p.x += p.vx;
			p.y += p.vy;

			ctx.arc(p.x, p.y, sizeArc, 0, 2 * Math.PI);
			ctx.stroke()
			ctx.fill();

if(sombrasi2==true){
			ctx.beginPath()
			ctx.strokeStyle = colorfinal
			ctx.lineWidth =widhtlineasombra1
			ctx.moveTo(p.x, p.y);
			ctx.lineTo(p.x, p.y - sizelinea);
			ctx.stroke()
}

			p.vx *= 0.99;
			p.vy *= 0.99;
			if (p.x > width) p.x = 0;
			if (p.y > height) p.y = 0;
			if (p.x < 0) p.x = width;
			if (p.y < 0) p.y = height;
		}
		requestAnimationFrame(render)
	}

	function getValue(x, y) {

		var scale = 0.001;
		x = (x - width) * scale;
		y = (y - height) * scale;

		var x1 = Math.sin(a * y) + c * Math.cos(a * x);
		var y1 = Math.sin(b * x) + d * Math.cos(b * y);
		return Math.atan2(y1 - y, x1 - x);
	}
}

function lineas2() {
	var points = [];
	for (var y = 0; y < height; y += spacelinea2) {
		points.push({
			x: -10,
			y: y,
			vx: 2,
			vy: 2
		})
	};
	var startTime = Date.now();
	render();

	function render() {

		var elapsedTime = Date.now() - startTime; 
		if (elapsedTime > 30000) return;


		for (var i = 0; i < points.length; i++) {
	
			var colores = [colores1, colores2, colores3]
		var colorfinal = colores[Math.floor(Math.random() * colores.length)]
			var sizelinea = Math.random() *  300

			var p = points[i];
			var value = getValue(p.x, p.y);
			p.vx += Math.cos(value) * 0.6;
			p.vy += Math.sin(value) * 0.6;


			ctx.beginPath()
			ctx.lineWidth = widhtlinea
			ctx.strokeStyle = colorstroke
			ctx.fillStyle = colorlinea2final

			ctx.moveTo(p.x, p.y);
			p.x += p.vx;
			p.y += p.vy;
			ctx.arc(p.x, p.y, sizeArc, 0, 2 * Math.PI);
			ctx.stroke()
			ctx.fill();

		if(sombrasi==true){
			
			ctx.beginPath()
			ctx.strokeStyle = colorfinal
			ctx.lineWidth =widhtlineasombra1
			ctx.moveTo(p.x, p.y);
			ctx.lineTo(p.x, p.y - sizelinea);
			ctx.stroke()
		}

			p.vx *= 0.99;
			p.vy *= 0.99;
			if (p.x > width) p.x = 0;
			if (p.y > height) p.y = 0;
			if (p.x < 0) p.x = width;
			if (p.y < 0) p.y = height;
		}
		requestAnimationFrame(render)
	}

	function getValue(x, y) {

		var scale = 0.001;
		x = (x - width) * scale;
		y = (y - height) * scale;


		var x1 = Math.sin(a2 * y) + c2 * Math.cos(a2 * x);
		var y1 = Math.sin(b2 * x) + d2 * Math.cos(b2 * y);
		return Math.atan2(y1 - y, x1 - x);
	}
}

function marco() {

	ctx.globalAlpha = 1
	ctx.beginPath()
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0
	ctx.strokeStyle = colormarco
	ctx.lineWidth = 50
	ctx.shadowBlur = 0
	ctx.moveTo(0, 0)
	ctx.lineTo(0, height)
	ctx.lineTo(width, height)
	ctx.lineTo(width, 0)
	ctx.lineTo(0, 0)
	ctx.stroke()


}

switch(texturas){
	case 1:
		textura1()
		break
	case 2:
		textura2()
		break
	case 3:
		textura3()
		break
					
}

lineas()
lineas2()
setTimeout(cambiarColor,3000);
setTimeout(marco, 6000)


var download = function () {
	var img = document.createElement('a')
	img.download = 'N.png';
	img.href = document.getElementById('canvas').toDataURL()
	img.click()
}

document.addEventListener('keydown', (event) => {
	var name = event.key;
	var code = event.code;
	if (code === 'KeyS') {
		this.download();
	}
}, false);

