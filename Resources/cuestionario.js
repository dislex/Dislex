exports.cuestionario = function(navController) {

var win = Titanium.UI.createWindow({
	title: 'Evaluación Dislexia',
	backgroundColor: '#000',
});

var etiqueta = Titanium.UI.createLabel({
	text: '1.- Bajo Nivel de Comprension',
	left: '5%',
	top: '40%',
	width: 'auto',
	height: 'auto'
});

win.add(etiqueta);

var botonayuda = Titanium.UI.createButton({
	left: '5%',
	top: '50%',
	backgroundImage: 'KS_nav_ui.png',
	width: '25%',
	height: '25%'
});

win.add(botonayuda);

botonayuda.addEventListener('click', function(){
	
	switch(contador)
{
		case 1: 
	alert("Solo imita conductas de sus compañeros.\nNo actúa con espontaneidad, tiene dificultades para organizarse en el trabajo y terminarlo.\nMuestra una actitud indiferente ante los estímulos que recibe.");
	break;
		case 2: 
	alert("Corre al lado contrario de que se le indica.\nNo puede cambiar de una acción o actividad a otra con facilidad.\nNo ubica derecha-izquierda, adelante - atrás, arriba-abajo, antes - después, al realizar acciones.");
	break;
		case 3: 
	alert("Le cuesta mucho esfuerzo permanecer quieto en un mismo sitio por espacios cortos de tiempo.\nNo capta el peligro.\nCambios constantes de lugar (deambula).");
	break;
		case 4: 
	alert("No muestra espontaneidad.\nManifiesta la necesidad de que la educadora le ofrezca estímulos didácticos y emocionales de manera constante para terminar su trabajo, cambiar de actividad y relacionarse con sus compañeros.\nPermanece aislado, prefiere le juego individual u observa a los demás sin relacionarse.");
	break;
		case 5: 
	alert("Su patrón de relación esta basado en golpear, despojar a los demás, hacer muecas de desagrado o amenaza y repetir groserías (coprolalia).\nNo hay prácticamente intenciones de reparar el daño (pedir disculpas limpiar lo que ensucio o recoger lo que tiro).\nNo puede relacionarse con sus compañeros por el vinculo de empatía.");
	break;
		case 6: 
	alert("Destruye su trabajo sin causa aparente.\nSe jala de los cabellos, se pellizca, rasca o arranca costras, se muerde las uñas (onicofagia).\nPresenta cambios en su conducta o humor, oscila entre la alegria-enojo, tristeza-enojo.");
	break;
		case 7: 
	alert("No presenta atención sostenida.\nFalta de respuesta a la disciplina.\nA menudo no puede terminar lo que comienza.");
	break;
		case 8: 
	alert("Baja tolerancia a la frustración.\nPermanece fijo en la conducta reactiva (reacciona de manera exagerada).\nSe muestra amenazante ante cualquier orden o cuando se le llame la atención.");
	break;
		case 9: 
	alert("Necesita mucho del apoyo de la educadora y compañeros(reconocimiento, aceptación).\nCamina detrás de la educadora esperando ser auxiliado, no se incorpora al resto del grupo.\nPresenta conductas dependientes por un periodo prolongado.\nDesobediencia patológica.");
	break;
		case 10: 
	alert("Patrón repetitivo y persistente de una conducta.\nRebelde, no obedecer, burlarse de la autoridad.\nViolencia física contra personas, bienes o su trabajo escolar.\nOposición a la figura de autoridad (directora, educadora, padres).");
	break;
		case 11: 
	alert("Trastornos en la articulación, no pronuncia correctamente algunos fonemas.\nManejo inadecuado de contenidos.\nLenguaje gramatical.");
	break;
		case 12: 
	alert("Incapaz de permanecer solo en su sitio, terrores nocturnos (pesadillas).\nPresenta gastralgias, cefaleas, nauseas, vómitos y sudoracion en las manos.\nMiedos imaginarios a animales, obscuridad, monstruos.");
	break;
		case 13: 
	alert("Llanto labil, llora por cualquier cosa.\nFalta de interés por interactuar con el medio ambiente.\nEvasión constante al contacto social, sobre todo con sus compañeros.");
	break;
		case 14: 
	alert("Bajo nivel en la talla y el peso del niño.\nTalla y peso por arriba del promedio establecido para la edad.\nSolo come lo que le gusta.");
	break;
		case 15: 
	alert("Dificultad en las actividades de coordinación.\nDificultad para identificar y/o discriminar sonidos.\nSe acerca demasiado los objetos a los ojos para observarlos o reconocerlos.");
	break;
		case 16:
	alert("Angustia, el niño produce la emisión de orina involuntaria.\nDespués de un berrinche el niño no controla la emisión de orina.");
	break;
}
});


var botonseleccion= Ti.UI.createSwitch({
	style:Titanium.UI.Android.SWITCH_STYLE_CHECKBOX,
	width:'10%', height:'10%',top:'40%',left:'80%'
});

win.add(botonseleccion);

var botonsiguiente = Titanium.UI.createButton({
	title: 'Siguiente >',
	top: '60%',
	left: '50%',
	widht: '45%',
	height: '15%'
});

win.add(botonsiguiente);

var respuestas=0;
var contador=1;

botonsiguiente.addEventListener('click', function() {

switch(contador)
{
		case 0:
	etiqueta.text='1.- Bajo nivel de comprension';
	
	break;
		case 1: 
		if(botonseleccion.value==true){
			respuestas=respuestas+1;
			botonseleccion.value=false;
		}		
	etiqueta.text='2.- Desubicación Temporo-Espacial';
	
	break;
		case 2: 
		if(botonseleccion.value==true){
			respuestas=respuestas+2;
			botonseleccion.value=false;
		}	
	etiqueta.text='3.- Hiperquinesia';

	break;
		case 3: 
		if(botonseleccion.value==true){
			respuestas=respuestas+4;
			botonseleccion.value=false;
		}	
	etiqueta.text='4.- Hipoactividad';
	break;
		case 4: 
		if(botonseleccion.value==true){
			respuestas=respuestas+8;
			botonseleccion.value=false;
		}	
	etiqueta.text='5.- Agresividad';
	break;
		case 5: 
		if(botonseleccion.value==true){
			respuestas=respuestas+16;
			botonseleccion.value=false;
		}	
	etiqueta.text='6.- Autoagresión';
	break;
		case 6: 
		if(botonseleccion.value==true){
			respuestas=respuestas+32;
			botonseleccion.value=false;
		}	
	etiqueta.text='7.- Atención dispersa';
	break;
		case 7: 
		if(botonseleccion.value==true){
			respuestas=respuestas+64;
			botonseleccion.value=false;
		}	
	etiqueta.text='8.- Irritabilidad';
	break;
		case 8: 
		if(botonseleccion.value==true){
			respuestas=respuestas+128;
			botonseleccion.value=false;
		}	
	etiqueta.text='9.- Inseguridad';
	break;
		case 9: 
		if(botonseleccion.value==true){
			respuestas=respuestas+256;
			botonseleccion.value=false;
		}	
	etiqueta.text='10.- Desobediencia patológica';
	break;
		case 10: 
		if(botonseleccion.value==true){
			respuestas=respuestas+512;
			botonseleccion.value=false;
		}	
	etiqueta.text='11.- Problemas de lenguaje';
	break;
		case 11: 
		if(botonseleccion.value==true){
			respuestas=respuestas+1024;
			botonseleccion.value=false;
		}	
	etiqueta.text='12.- Trastornos por Angustia de Separación';
	break;
		case 12: 
		if(botonseleccion.value==true){
			respuestas=respuestas+2048;
			botonseleccion.value=false;
		}	
	etiqueta.text='13.- Depresión de la infancia.';
	break;
		case 13: 
		if(botonseleccion.value==true){
			respuestas=respuestas+4096;
			botonseleccion.value=false;
		}	
	etiqueta.text='14.- Problemas de alimentación';
	break;
		case 14: 
		if(botonseleccion.value==true){
			respuestas=respuestas+8192;
			botonseleccion.value=false;
		}	
	etiqueta.text='15.- Alteraciones en las Sensopercepciones Visuales y auditivas.';
	break;
		case 15: 
		if(botonseleccion.value==true){
			respuestas=respuestas+16384;
			botonseleccion.value=false;
		}	
	etiqueta.text='16.- Enuresis';
	break;
}

contador = contador+1;

if(botonseleccion.value==true){
			respuestas=respuestas+32768;
		}	
if(contador == 17){
	
	var dialog = Titanium.UI.createAlertDialog({
    buttonNames: ['Enviar Resultados', 'Salir'],
    message: 'Prueba Finalizada',
    title: 'Dislex'
 });
 
 	dialog.show();
 	
 	dialog.addEventListener('click', function(e){
 		if(e.index==1){
 			win.close();
 		}
 		if(e.index==0){
 			alert(""+respuestas);
 		}
 	});
	
	
};


	
});


return win;
};