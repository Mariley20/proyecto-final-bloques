mapa = [
    "*************************************************",
    "*                                               *",
    "*                                               *",
    "*      **o        ***                **W        *",
    "*                 ***                 *         *",
    "*                 *              *              *",
    "*                 *                     *       *",
    "*    *  *                     *   *     *       *",
    "*     * *                    **** *             *",
    "*     *                                 *       *",
    "*                                      **       *",
    "*                        **            **       *",
    "*                         *                     *",
    "*             ** *       ***                    *",
    "*             ***                               *",
    "*             **                  **            *",
    "*      **                         **            *",
    "*      **                         *             *",
    "*        *            **                        *",
    "*                    ***                        *",
    "*                   * **                        *",
    "*                                               *",
    "*************************************************"
];

document.getElementById('start-button').addEventListener("click", menuJuego)

function menuJuego() {
    var btnStart = document.getElementById('start-button');
    btnStart.removeAttribute('class');
    btnStart.className = 'classHidden';
    // .. creacion de la etiqueta div
    var tagDiv = document.createElement('div');
    tagDiv.setAttribute("id", "menu_tablero");
    tagDiv.className = "menuDelJuego";
    //hijos del div
    var tagImg = document.createElement('img');
    // creacion de la etiqueta p
    var tagP_1 = document.createElement('p');
    tagP_1.setAttribute("id", "dibujarTablero1");
    tagP_1.appendChild(document.createTextNode('STAR GAME'));

    var tagP_2 = document.createElement('p');
    tagP_2.id = 'password';
    tagP_2.appendChild(document.createTextNode('PASSWORD'));

    var tagP_3 = document.createElement('p');
    tagP_3.id = "instrucciones";
    tagP_3.appendChild(document.createTextNode('INSTRUCCIONES'));

    var tagP_4 = document.createElement('p');
    tagP_4.id = "creditos";
    tagP_4.appendChild(document.createTextNode('CREDITS'));

    // añadiendo sus hijos al div.
    tagDiv.appendChild(tagImg);
    tagDiv.appendChild(tagP_1);
    tagDiv.appendChild(tagP_2);
    tagDiv.appendChild(tagP_3);
    tagDiv.appendChild(tagP_4);
    inicio.appendChild(tagDiv);

    document.getElementById('dibujarTablero1').addEventListener("click", dibujarTablero);
    document.getElementById('password').addEventListener("click", password);
    document.getElementById('instrucciones').addEventListener("click", instrucciones);
    document.getElementById('creditos').addEventListener("click", creditos);
}
var matrizMapa = [];

function ocultarMenuTablero() {
    var divtablero = document.getElementById('menu_tablero');
    divtablero.removeAttribute('class');
    divtablero.className = 'classHidden';
}

function dibujarTablero() {
    ocultarMenuTablero();
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
            } else if (pared[j] == " ") {
                clase = 'camino';
            } else if (pared[j] == "o") {
                clase = 'bolita';
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

function instrucciones() {
    var texto = "Encuentra al Principe es un juego sencillo." +
        "Donde usted intenta encontrar al principe de sus sueños." +
        "La meta:" +
        "guiar a la princesa con las flechas. la princesa continuara su trayectoria hasta que sea detinida por una pared." +
        "Simbolo I:" +
        "Este simbolo actua como un tunel, el cual la princesa pasa atravez de el, y le llevara a otra parte del tablero." +
        "todo sea por encontrar al principe." +
        "Cada nivel tiene una contraseña(password) utilizalos para continuar de acuerdo al nivel donde te quedaste." +
        "!Buena suerte Princesa, la hora a llegado¡";
    ocultarMenuTablero();
    var tagDiv = document.createElement('div');
    var tagP_1 = document.createElement('p');
    tagP_1.appendChild(document.createTextNode(texto));
    tagDiv.appendChild(tagP_1);

    inicio.appendChild(tagDiv);
}
function password(){
    ocultarMenuTablero();
    var tagDiv = document.createElement('div');
    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'passwordNivel'
    var button = document.createElement('button');
    button.id = 'irNivel';
    button.appendChild(document.createTextNode('ir'))

    tagDiv.appendChild(input);
    tagDiv.appendChild(button);

    inicio.appendChild(tagDiv);
}
function creditos(){
    ocultarMenuTablero();
    var tagDiv = document.createElement('div');
    var tagP_1 = document.createElement('p');
    tagP_1.appendChild(document.createTextNode('Maquetacion & javascript'))
    var tagP_2 = document.createElement('p');
    tagP_2.appendChild(document.createTextNode('Jackeline'));
    var tagP_3 = document.createElement('p');
    tagP_3.appendChild(document.createTextNode('Mariley'));

    var tagP_4 = document.createElement('p');
    tagP_4.appendChild(document.createTextNode('Jedi Master'))
    var tagP_5 = document.createElement('p');
    tagP_5.appendChild(document.createTextNode('Alex'));
    var tagP_6 = document.createElement('p');
    tagP_6.appendChild(document.createTextNode('Sheyla'));

    var tagImg = document.createElement('img');
    tagImg.src = 'assets/img/logo.png';

    // hijos
    tagDiv.appendChild(tagP_1);
    tagDiv.appendChild(tagP_2);
    tagDiv.appendChild(tagP_3);
    tagDiv.appendChild(tagP_4);
    tagDiv.appendChild(tagP_5);
    tagDiv.appendChild(tagP_6);
    tagDiv.appendChild(tagImg);

    inicio.appendChild(tagDiv);
}

//evento 
document.addEventListener("keydown", movimiento);

//keycode de las teclas
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

function movimiento(evento) {
    switch (evento.keyCode) {
        case teclas.UP:
            mover(-1, 0);
            break;
        case teclas.DOWN:
            mover(1, 0);
            break;
        case teclas.LEFT:
            mover(0, -1);
            break;
        case teclas.RIGHT:
            mover(0, 1);
            break;
    }
}
var stop;

function mover(x, y) {
    var idpadre = document.getElementsByClassName('bolita')[0].id;
    var idPapa = idpadre.split(',')
    var nuevo_x = parseInt(idPapa[0]) + x;
    var nuevo_y = parseInt(idPapa[1]) + y;

    if (matrizMapa[nuevo_x][nuevo_y] == '*') {
        clearTimeout(stop);
        return;
    }
    if (matrizMapa[nuevo_x][nuevo_y] != '*') {
        var antiguaPosicion = document.getElementById(idpadre);
        antiguaPosicion.removeAttribute('class');
        antiguaPosicion.className = 'camino';

        var nuevaPosicion = document.getElementById(nuevo_x + "," + nuevo_y);
        nuevaPosicion.removeAttribute('class');
        nuevaPosicion.className = 'bolita';

        if (matrizMapa[nuevo_x][nuevo_y] == 'W') {
            clearTimeout(stop);
            alert('ganaste...')
            return;
        }
    }
    stop = setTimeout(function() {
        mover(x, y)
    }, 100);
}