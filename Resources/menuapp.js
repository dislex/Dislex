//---------------------------------Menu Estilo Metro----------------------------------

exports.menuapp = function(navController) {
    
var win1 = Titanium.UI.createWindow({  
    title:':: DISLEX ::',
 backgroundColor: '#000000',
      orientationModes: [
        Titanium.UI.PORTRAIT,
        Titanium.UI.UPSIDE_PORTRAIT,
        Titanium.UI.LANDSCAPE_LEFT,
        Titanium.UI.LANDSCAPE_RIGHT,
        Titanium.UI.FACE_DOWN,
        Titanium.UI.FACE_UP
          ],
});



var header = Titanium.UI.createButton({
    backgroundImage:'metritomx.png',
	});
	win1.add(header);

var buton1 = Titanium.UI.createButton({
    backgroundImage:'KS_nav_ui.png'
    });


var buton1_etiqueta = Titanium.UI.createLabel({
	text: 'Boton 1', align: 'right',color: '#FFF',
	width: 'auto',height: 'auto'	
});
win1.add(buton1_etiqueta);


var buton2 = Titanium.UI.createButton({
    backgroundImage: 'KS_nav_ui.png'
});


var buton2_etiqueta = Titanium.UI.createLabel({
	text: 'Boton 2', align: 'right',color: '#FFF',
	width: 'auto',height: 'auto'	
});
win1.add(buton2_etiqueta);


var buton3 = Titanium.UI.createButton({
    backgroundImage: 'KS_nav_ui.png'
});


var buton3_etiqueta = Titanium.UI.createLabel({
	text: 'Boton 3', align: 'right',color: '#FFF',
	width: 'auto',height: 'auto'
});
win1.add(buton3_etiqueta);


var buton4 = Titanium.UI.createButton({
    backgroundImage: 'KS_nav_ui.png'
});


var buton4_etiqueta = Titanium.UI.createLabel({
	text: 'Boton 4', align: 'right',color: '#FFF',
	width: 'auto',height: 'auto'
});
win1.add(buton4_etiqueta);


var buton5 = Titanium.UI.createButton({
    backgroundImage: 'KS_nav_ui.png'
});


var buton5_etiqueta = Titanium.UI.createLabel({
	text: 'Boton 5', align: 'right',color: '#FFF',
	width: 'auto',height: 'auto'
});
win1.add(buton5_etiqueta);


var buton6 = Titanium.UI.createButton({
    backgroundImage: 'KS_nav_ui.png'
});


var buton6_etiqueta = Titanium.UI.createLabel({
	text: 'Cuestionarios', align: 'right',color: '#FFF',
	width: 'auto',height: 'auto'
});
win1.add(buton6_etiqueta);



Ti.Gesture.addEventListener("orientationchange", function (event) {
	var ancho = Titanium.Platform.displayCaps.platformWidth;
	var alto = Titanium.Platform.displayCaps.platformHeight;
	
	var anchoboton=40;
	var altoboton=anchoboton*(ancho/alto);
	var izq1= (30-(anchoboton/2));
	var izq2= ((70)-(anchoboton/2));
	
	header.top ='0%', header.left = '0%', header.width = '100%', header.height = '20%';
    buton1.top ='25%', buton1.left =''+izq1+'%',buton1.width =''+anchoboton+'%', buton1.height =''+altoboton+'%';
    buton2.top ='25%', buton2.left =''+izq2+'%',buton2.width =''+anchoboton+'%', buton2.height =''+altoboton+'%';
    buton3.top ='50%', buton3.left =''+izq1+'%',buton3.width =''+anchoboton+'%', buton3.height =''+altoboton+'%';
    buton4.top ='50%', buton4.left =''+izq2+'%',buton4.width =''+anchoboton+'%', buton4.height =''+altoboton+'%';
    buton5.top ='75%', buton5.left =''+izq1+'%',buton5.width =''+anchoboton+'%', buton5.height =''+altoboton+'%';
    buton6.top ='75%', buton6.left =''+izq2+'%',buton6.width =''+anchoboton+'%', buton6.height =''+altoboton+'%';
    
    var top1=29+(altoboton/2); 
    var top2=54+(altoboton/2); 
    var top3=79+(altoboton/2); 
    izq1= izq1+7;
    izq2= izq2+7;
	buton1_etiqueta.top =''+top1+'%', buton1_etiqueta.left =''+izq1+'%';
   	buton2_etiqueta.top =''+top1+'%', buton2_etiqueta.left =''+izq2+'%';
    buton3_etiqueta.top =''+top2+'%', buton3_etiqueta.left =''+izq1+'%';
    buton4_etiqueta.top =''+top2+'%', buton4_etiqueta.left =''+izq2+'%';
    buton5_etiqueta.top =''+top3+'%', buton5_etiqueta.left =''+izq1+'%';
    buton6_etiqueta.top =''+top3+'%', buton6_etiqueta.left =''+izq2+'%';
	
	
    if (event.orientation === Ti.UI.LANDSCAPE_LEFT || event.orientation === Ti.UI.LANDSCAPE_RIGHT)
    {	
   	var alto = Titanium.Platform.displayCaps.platformWidth;
	var ancho = Titanium.Platform.displayCaps.platformHeight;
	
	var altoboton=40;
	var anchoboton=altoboton*(ancho/alto);
	var izq1= (25-(anchoboton/2));
	var izq2= (50-(anchoboton/2));
	var izq3= (75-(anchoboton/2));
	
	
	header.top ='0%', header.left = '32%', header.width = '36%', header.height = '20%';
   	buton1.top ='25%',buton1.left =''+izq1+'%', buton1.width =''+anchoboton+'%',  buton1.height =''+altoboton+'%';
    buton3.top ='25%',buton3.left =''+izq2+'%' ,buton3.width =''+anchoboton+'%', buton3.height =''+altoboton+'%';
    buton5.top ='25%',buton5.left =''+izq3+'%',buton5.width =''+anchoboton+'%', buton5.height =''+altoboton+'%';
    
    buton2.top ='65%',buton2.left =''+izq1+'%', buton2.width =''+anchoboton+'%', buton2.height =''+altoboton+'%';
    buton4.top ='65%',buton4.left =''+izq2+'%',buton4.width =''+anchoboton+'%', buton4.height =''+altoboton+'%'; 
    buton6.top ='65%',buton6.left =''+izq3+'%',buton6.width =''+anchoboton+'%', buton6.height =''+altoboton+'%'; 
    
    
    var top1=30+(altoboton/2); 
    var top2=70+(altoboton/2); 
    izq1= izq1+7;
    izq2= izq2+7;
    izq3= izq3+7;


   	buton1_etiqueta.top =''+top1+'%', buton1_etiqueta.left =''+izq1+'%';
   	buton3_etiqueta.top =''+top1+'%', buton3_etiqueta.left =''+izq2+'%';
    buton5_etiqueta.top =''+top1+'%', buton5_etiqueta.left =''+izq3+'%';
    
    buton4_etiqueta.top =''+top2+'%', buton4_etiqueta.left =''+izq2+'%';
    buton2_etiqueta.top =''+top2+'%', buton2_etiqueta.left =''+izq1+'%';
    buton6_etiqueta.top =''+top2+'%', buton6_etiqueta.left =''+izq3+'%';
    }
});


prueba();

function prueba(){
	var ancho = Titanium.Platform.displayCaps.platformWidth;
	var alto = Titanium.Platform.displayCaps.platformHeight;
	
	var anchoboton=40;
	var altoboton=anchoboton*(ancho/alto);
	var izq1= (30-(anchoboton/2));
	var izq2= ((70)-(anchoboton/2));
	
	header.top ='0%', header.left = '0%', header.width = '100%', header.height = '20%';
    buton1.top ='25%', buton1.left =''+izq1+'%',buton1.width =''+anchoboton+'%', buton1.height =''+altoboton+'%';
    buton2.top ='25%', buton2.left =''+izq2+'%',buton2.width =''+anchoboton+'%', buton2.height =''+altoboton+'%';
    buton3.top ='50%', buton3.left =''+izq1+'%',buton3.width =''+anchoboton+'%', buton3.height =''+altoboton+'%';
    buton4.top ='50%', buton4.left =''+izq2+'%',buton4.width =''+anchoboton+'%', buton4.height =''+altoboton+'%';
    buton5.top ='75%', buton5.left =''+izq1+'%',buton5.width =''+anchoboton+'%', buton5.height =''+altoboton+'%';
    buton6.top ='75%', buton6.left =''+izq2+'%',buton6.width =''+anchoboton+'%', buton6.height =''+altoboton+'%';
    
    var top1=29+(altoboton/2); 
    var top2=54+(altoboton/2); 
    var top3=79+(altoboton/2); 
    izq1= izq1+7;
    izq2= izq2+7;
	buton1_etiqueta.top =''+top1+'%', buton1_etiqueta.left =''+izq1+'%';
   	buton2_etiqueta.top =''+top1+'%', buton2_etiqueta.left =''+izq2+'%';
    buton3_etiqueta.top =''+top2+'%', buton3_etiqueta.left =''+izq1+'%';
    buton4_etiqueta.top =''+top2+'%', buton4_etiqueta.left =''+izq2+'%';
    buton5_etiqueta.top =''+top3+'%', buton5_etiqueta.left =''+izq1+'%';
    buton6_etiqueta.top =''+top3+'%', buton6_etiqueta.left =''+izq2+'%';
    
    
    if (ancho>alto)
    {	
   	var alto = Titanium.Platform.displayCaps.platformWidth;
	var ancho = Titanium.Platform.displayCaps.platformHeight;
	
	var altoboton=40;
	var anchoboton=altoboton*(ancho/alto);
	var izq1= (25-(anchoboton/2));
	var izq2= (50-(anchoboton/2));
	var izq3= (75-(anchoboton/2));
	
	header.top ='0%', header.left = '32%', header.width = '36%', header.height = '20%';
   	buton1.top ='25%',buton1.left =''+izq1+'%', buton1.width =''+anchoboton+'%',  buton1.height =''+altoboton+'%';
    buton3.top ='25%',buton3.left =''+izq2+'%' ,buton3.width =''+anchoboton+'%', buton3.height =''+altoboton+'%';
    buton5.top ='25%',buton5.left =''+izq3+'%',buton5.width =''+anchoboton+'%', buton5.height =''+altoboton+'%';
    
    buton2.top ='65%',buton2.left =''+izq1+'%', buton2.width =''+anchoboton+'%', buton2.height =''+altoboton+'%';
    buton4.top ='65%',buton4.left =''+izq2+'%',buton4.width =''+anchoboton+'%', buton4.height =''+altoboton+'%'; 
    buton6.top ='65%',buton6.left =''+izq3+'%',buton6.width =''+anchoboton+'%', buton6.height =''+altoboton+'%'; 
        
    var top1=30+(altoboton/2); 
    var top2=70+(altoboton/2); 
    izq1= izq1+7;
    izq2= izq2+7;
    izq3= izq3+7;

   	buton1_etiqueta.top =''+top1+'%', buton1_etiqueta.left =''+izq1+'%';
   	buton3_etiqueta.top =''+top1+'%', buton3_etiqueta.left =''+izq2+'%';
    buton5_etiqueta.top =''+top1+'%', buton5_etiqueta.left =''+izq3+'%';
    
    buton4_etiqueta.top =''+top2+'%', buton4_etiqueta.left =''+izq2+'%';
    buton2_etiqueta.top =''+top2+'%', buton2_etiqueta.left =''+izq1+'%';
    buton6_etiqueta.top =''+top2+'%', buton6_etiqueta.left =''+izq3+'%';
    }
	 
};

//
buton1.addEventListener('click', function() {	
	var rutas = require('rutas').rutas;
    navController.open(new rutas(navController));    
    });
    
buton2.addEventListener('click', function() {
	
	if(!Titanium.Network.online){
 			  Titanium.API.info('connection is not ok');
 			  var alertDialog = Titanium.UI.createAlertDialog({
              title: 'Requerido',
              message: 'Te recomendamos estar conectado a internet para poder utilizar esta seccion de manera satisfactoria.',
              buttonNames: ['Aceptar']
            });
            alertDialog.show();
}else{
  Titanium.API.info('connection is ok');
  var redes = require('redes').redes;
  navController.open(new redes(navController)); 
};          
    });

buton3.addEventListener('click', function() {
	var geo = require('geo').geo;
    navController.open(new geo(navController));
    });
    
buton4.addEventListener('click', function() {
	  var lineas = require('lineas').lineas;
      navController.open(new lineas(navController));
	    });

buton5.addEventListener('click', function() {      
        var mapaimagenes = require('mapaimagenes').mapaimagenes;
        navController.open(new mapaimagenes(navController));        
    });
    
buton6.addEventListener('click', function() {
        var cuestionario = require('cuestionario').cuestionario;
        navController.open(new cuestionario(navController));        
    });
    
    win1.add(buton1);
    win1.add(buton2);
    win1.add(buton3);
    win1.add(buton4);
    win1.add(buton5);
    win1.add(buton6);
    
    if (Ti.Platform.osname == "iphone"){} else if (Ti.Platform.osname == "android"){


var dialog = Titanium.UI.createOptionDialog();

	win1.activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;
		
		var m1 = menu.add({ title : 'Acerca De' });
		m1.setIcon("metro-derechos.png");
		m1.addEventListener('click', function(e) {
			
		var etiqueta = Titanium.UI.createLabel({
		text: 'Copyright 2000-2012 ideas Happy \n\nwww.ideashappy.com \n\ncontacto@ideashappy.com \n\nLos iconos son utilizados con fin ilustrativo y pertenecen al STC Metro.',
		top: '10%',	left: '5%', color: '#FFF',	});
				
				var root = Ti.UI.createView({});
				var view1 = Ti.UI.createView({});	
				view1.add(etiqueta);
				root.add(view1);
	

    dialog.buttonNames = ['Ok'];
    dialog.title = 'Acerca De';
	dialog.androidView = root;
	dialog.show();					
		});
	};

}
    


return win1;
};