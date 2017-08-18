var matrizMapa;

/* formulario del menu*/
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

function ocultarMenuTablero() {
    var divtablero = document.getElementById('menu_tablero');
    divtablero.removeAttribute('class');
    divtablero.className = 'classHidden';

    var tagDiv = document.createElement('div');
    var tagButton = document.createElement('button');
    tagButton.id = 'volverMenu';
    tagButton.appendChild(document.createTextNode('Menu'));
    // hijos del div
    tagDiv.appendChild(tagButton);
    inicio.appendChild(tagDiv);
    document.getElementById('volverMenu').addEventListener('click', mostrarMenuTablero);
}

function mostrarMenuTablero() {
    var divtablero = document.getElementById('menu_tablero');
    divtablero.removeAttribute('class');
    divtablero.className = 'menuDelJuego';

    var hijos = inicio.childNodes;
    while (hijos.length > 4) {
        inicio.removeChild(inicio.lastChild);
    }
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

function password() {
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

function creditos() {
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
} /*fin del formulario del menu*/

var map0 = [
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
var map1 = [
    "* * * * * * * * * * * * * * * * * * * *",
    "* *           * * *             * *   *",
    "* *             W                 *   *",
    "*                           *     *   *",
    "*         *                       *   *",
    "*   * * * *             *         *   *",
    "*     *     * *       *   *       *   *",
    "*   * I o   * *         *   * * * *   *",
    "*     *     * *   * *  **           I *",
    "*   *          *        *         * * *",
    "*           * ***   *   *     *   * * *",
    "*       *      *        * *       * * *",
    "*     * *             ***         * * *",
    "* *   *           *     *         *   *",
    "*     *   *      *      *     *       *",
    "* *        *     *      *         *   *",
    "* * * * * * * * * * * * * * * * * * * *"
];

var mapas = [map0, map1 /*, map2, map3, map4, map5, map6*/ ];
//var mapa = mapas[6];

var actualmapa = 0;

function dibujarTablero() {
    console.log(actualmapa);
    var matrix = [];
    var mapa = mapas[actualmapa];
    ocultarMenuTablero();
    var tagTable = document.createElement('table');
    tagTable.id = 'tableroRoad';
    for (var i = 0; i < mapa.length; i++) {
        var pared = mapa[i].split("");
        matrix.push(pared);
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
            } else if(pared[j] == "W"){
                clase = 'inicioFin';
            }
            tag_TD.setAttribute('class', clase);
            tag_TR.appendChild(tag_TD);
        }
        tagTable.appendChild(tag_TR);
    }
    inicio.appendChild(tagTable);
    matrizMapa = matrix; //limpio matriz final
    if (actualmapa == mapas.length - 1) {
        actualmapa = 0;
    }
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

// funcion mover izquierda derecha, arriba abojo
function mover(x, y) {
    var idpadre = document.getElementsByClassName('bolita')[0].id;
    var idPapa = idpadre.split(',')
    var nuevo_x = parseInt(idPapa[0]) + x;
    var nuevo_y = parseInt(idPapa[1]) + y;

    console.log(nuevo_y+".-."+nuevo_x);

    /*perdiste vuelve al inicio*/
    if (nuevo_x == '0' || nuevo_x == (matrizMapa.length - 1) || nuevo_y == '0' || nuevo_y == (matrizMapa[nuevo_x].length - 1)) {
        console.log('perdiste');
        console.log(matrizMapa)

        var hijos = inicio.childNodes;
        while (hijos.length > 4) {
            inicio.removeChild(inicio.lastChild);
        }
        dibujarTablero();
    }
    /*llegaste a un bloque detenido*/
    if (matrizMapa[nuevo_x][nuevo_y] == '*') {
        clearTimeout(stop);
        return;
    }
    /*avanza hasta llegar a un bloque*/
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
            actualmapa++;
            var hijos = inicio.childNodes;
            while (hijos.length > 4) {
                inicio.removeChild(inicio.lastChild);
            }
            dibujarTablero();
            return;
        }
    }
    /*ejecuta nuevamente la funcion mover*/
    stop = setTimeout(function() {
        mover(x, y)
    }, 1);
}