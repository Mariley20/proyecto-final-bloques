mapa=[  "*************************************************",
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
		"*************************************************"];
		var btnStart = document.getElementById('start-button');
		btnStart.onclick = function(){

			btnStart.removeAttribute('class');
			btnStart.className = 'classHidden';
			// .. creacion de la etiqueta div
			var tagDiv = document.createElement('div');
			tagDiv.className="menuDelJuego";
			//hijos del div
			var tagImg = document.createElement('img');
			// creacion de la etiqueta span
			var tagSpan_1 = document.createElement('p');
			// a la etiqueta span se añade un texto
			tagSpan_1.appendChild(document.createTextNode('STAR GAME'));

			var tagSpan_2 = document.createElement('p');
			tagSpan_2.appendChild(document.createTextNode('PASSWORD'));
			var tagSpan_3 = document.createElement('p');
			tagSpan_3.appendChild(document.createTextNode('INSTRUCCIONES'));
			var tagSpan_4 = document.createElement('p');
			tagSpan_4.appendChild(document.createTextNode('CREDITS'));

			// añadiendo sus hijos al div.
			tagDiv.appendChild(tagImg);
			tagDiv.appendChild(tagSpan_1);
			tagDiv.appendChild(tagSpan_2);
			tagDiv.appendChild(tagSpan_3);
			tagDiv.appendChild(tagSpan_4);
			inicio.appendChild(tagDiv);

		}