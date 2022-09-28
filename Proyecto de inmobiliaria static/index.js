const navA = document.querySelectorAll('nav ul li a');
const $home = navA[0];
const $buscar = navA[1];
const $contacto = navA[2];
const $descripcion = document.querySelector('#descripcion');

function act() {
    $home.classList.remove('active');
    $publicar.classList.remove('active');
    $buscar.classList.remove('active');
    $contacto.classList.remove('active');

    this.classList.add('active');
}
$home.addEventListener('click', act);
$buscar.addEventListener('click', act);
$contacto.addEventListener('click', act);


const left = document.querySelector('#fle-left');
const right = document.querySelector('#fle-right');

const fotoslide = ['./img/Hydrangeas.jpg', './img/Jellyfish.jpg', './img/Koala.jpg'];
const imgleft = document.querySelector('#imgleft');
const imgcenter = document.querySelector('#imgcenter');
const imgright = document.querySelector('#imgright');

let count = 0;
let count1 = 1;
let count2 = 2;
right.addEventListener('click', next);
left.addEventListener('click', prev);

function descrip(count) {
    switch (count) {
        case 0:
            $descripcion.innerText = 'Esta es la flor de Hydrangeas, muy linda por cierto';
            break;
        case 1:
            $descripcion.innerText = 'Esto es una Meduza, vive en mares y oceanos';
            break;
        case 2:
            $descripcion.innerText = 'Este es un Koala, vive en la selva arriba de los arboles';
            break;
    }
}

function prev() {
    count--;
    count1--;
    count2--;
    if (count < 0) {
        count = (fotoslide.length - 1);
    }
    imgcenter.src = fotoslide[count];


    if (count1 < 0) {
        count1 = (fotoslide.length - 1);
    }
    imgleft.src = fotoslide[count1];

    if (count2 < 0) {
        count2 = (fotoslide.length - 1);
    }
    imgright.src = fotoslide[count2];
    descrip(count)
}

function next() {
    count++;
    count1++;
    count2++;
    if (count > fotoslide.length - 1) {
        count = 0
    }
    imgcenter.src = fotoslide[count];

    if (count1 > fotoslide.length - 1) {
        count1 = 0
    }
    imgright.src = fotoslide[count1];

    if (count2 > fotoslide.length - 1) {
        count2 = 0
    }
    imgleft.src = fotoslide[count2];
    descrip(count)
}
// setInterval(next, 3000);


// En Buscador
const palabrasClaves = ['alquilar', 'comprar', '1 dormitorio', '2 dormitorio', '3 dormitorio', ]
const inputBuscar = document.querySelector('#inputBuscar');
const lupita = document.querySelector('#lupita');
lupita.addEventListener('click', lupa)
const equis = document.querySelector('.equis');
equis.addEventListener('click', borrar)

// FUNCIONE
function borrar(e){
	e.parentNode.remove()
}


function lupa() {
	const template = `<div class='muestra' id='pestaña'>
            <p>${inputBuscar.value}</p><svg xmlns="http://www.w3.org/2000/svg" onclick='borrar(this)' class='bi bi-x-lg equis' width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
        </div>`;
    let top = document.querySelector('#top');
    if (inputBuscar.value === 'alquilar') {
        inputBuscar.value = '';
        inputBuscar.setAttribute('placeholder', 'Cuantos dormitoris necesitas?');
        top.innerHTML = template;
    } else {
        inputBuscar.value = 'No coinside';
        setTimeout(() => { inputBuscar.value = '' }, 2000);
    }
}