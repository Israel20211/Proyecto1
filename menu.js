$(document).ready(main); //Indica la funcion principal
var contador = 1;
//var button = document.getElementById("btnMenu");
function main(){
	$('.Menu_barras').click(function(){ //Función OnClick
		if(contador == 1){
			$('nav').animate({
				left:'0' //Hace que Nav aparezca 
			});
		contador = 0;
		document.getElementById('img1').style.display = 'none';
		document.getElementById('img2').style.display = 'none';
	}else{
		$('nav').animate({
			left:'-120%' //Vuelve a ocultar nav
		});
		contador = 1;
		document.getElementById('img1').style.display = 'none';
		document.getElementById('img2').style.display = 'none';
	}
		
	});
}
/*button.onclick=function(){
	if(contador == 1){			
			$('nav').animate({
				left:'0' //Hace que Nav aparezca 
			});
			document.getElementById('img1').style.display = 'none';
			document.getElementById('img2').style.display = 'none';
		contador = 0;
	}else{
		$('nav').animate({
			left:'-120%' //Vuelve a ocultar nav
		});
			document.getElementById('img1').style.display = 'inline';
			document.getElementById('img2').style.display = 'inline';
	
		contador = 1;
	}
}*/
