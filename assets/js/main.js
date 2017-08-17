mapa = ["*************************************************",
    "*_______________________________________________*",
    "*_______________________________________________*",
    "*______**o________***________________**W________*",
    "*_________________***_________________*_________*",
    "*_________________*______________*______________*",
    "*_________________*_____________________*_______*",
    "*____*__*_____________________*___*_____*_______*",
    "*_____*_*____________________****_*_____________*",
    "*_____*_________________________________*_______*",
    "*______________________________________**_______*",
    "*________________________**____________**_______*",
    "*_________________________*_____________________*",
    "*_____________**_*_______***____________________*",
    "*_____________***_______________________________*",
    "*_____________**__________________**____________*",
    "*______**_________________________**____________*",
    "*______**_________________________*_____________*",
    "*________*____________**________________________*",
    "*____________________***________________________*",
    "*___________________*_**________________________*",
    "*_______________________________________________*",
    "*************************************************"
];
var btnStart = document.getElementById('start-button');
btnStart.onclick = function() {

    /*desaparece el booton iniciar*/
    btnStart.removeAttribute('class');
    btnStart.className = 'classHidden';

    // .. creacion de la etiqueta div
    var tagDiv = document.createElement('div');

    //hijos del div
    var tagImg = document.createElement('img');
    // creacion de la etiqueta span
    var tagSpan_1 = document.createElement('p');
    // a la etiqueta span se añade un texto
    tagSpan_1.appendChild(document.createTextNode('star Game'));

    var tagSpan_2 = document.createElement('p');
    tagSpan_2.appendChild(document.createTextNode('Pasword'));
    var tagSpan_3 = document.createElement('p');
    tagSpan_3.appendChild(document.createTextNode('instruciones'));
    var tagSpan_4 = document.createElement('p');
    tagSpan_4.appendChild(document.createTextNode('credits'));

    // añadiendo sus hijos al div.
    tagDiv.appendChild(tagImg);
    tagDiv.appendChild(tagSpan_1);
    tagDiv.appendChild(tagSpan_2);
    tagDiv.appendChild(tagSpan_3);
    tagDiv.appendChild(tagSpan_4);
    inicio.appendChild(tagDiv);
}
var matrizMapa = [];
dibujarTablero();
function dibujarTablero(){

    tagTable = document.createElement('table');
    for (var i = 0; i < mapa.length; i++) {
        var pared = mapa[i].split("");
        matrizMapa.push(pared);
        var tag_TR = document.createElement('tr');
        for (var j = 0; j < pared.length; j++) {
            var tag_TD = document.createElement('td');
            tag_TD.appendChild(document.createTextNode(pared[j]));
            tag_TD.setAttribute('id', i + "," + j);
            var clase = '';
            if (pared[j] == "*") {
                clase = 'pared';
            } else if (pared[j] == "_") {
                clase = 'camino    ';
            } else if (pared[j] == "o") {
                clase = 'inicioFin';
                var bolita = document.createElement('div');
                bolita.className = 'bolita';
                bolita.id = 'bola';
                tag_TD.appendChild(bolita);

            } else {
                clase = 'inicioFin';
            }
            tag_TD.setAttribute('class', clase);
            tag_TR.appendChild(tag_TD);
        }
        tagTable.appendChild(tag_TR);
    }
    inicio.appendChild(tagTable);
}

//keycode de las teclas
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

//evento 
document.addEventListener("keydown", movimiento);



//variables constantes
const izquierda=0;
const derecha=2;
const arriba=1;
const abajo=3;

function movimiento(evento)
{
  switch(evento.keyCode)
      {
    case teclas.UP:
      mover(-1, 0, arriba);
      break;
    case teclas.DOWN:
      mover(1, 0, abajo);
      break;
    case teclas.LEFT:
      mover(0, -1, izquierda);
      break;
    case teclas.RIGHT:
      mover(0, 1, derecha);
      break;
  }
}

function mover(x, y, direccion){
	var idpadre = document.getElementById('bola').parentNode.id;
	var idPapa = idpadre.split(',')
	var xa = idPapa[0]; 
	var yb = idPapa[1];
	//console.log(idPapa);
	console.log(matrizMapa[xa[0]][yb[1]]); //o
	if(matrizMapa[xa+x][yb+y] == '_'){
		((xa+x)+','+(yb+y)).className = 'imagenes';
	}


}