var x;
x=$ (document);
x.ready(inicializarEventos);

function inicializarEventos()
{

	var x;
	x=$ ("#publicidad");
	x.click(presionpublicidad);
}

function presionpublicidad()

{

	var x;
	x=$ ("#publicidad");
	x.css("background-color","#FFFFFF");
}