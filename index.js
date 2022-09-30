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
const inputBuscar = document.querySelector('#inputBuscar')
const lupita = document.querySelector('#lupita');
lupita.addEventListener('click', lupa)

// FUNCIONES

function borrar(e) {
    e.parentNode.remove()
}


// Respuesta1 alquilar o comprar
function alquilar() {
    let top = document.querySelector('#top');
    let template = `<div class='muestra' id='pestaña'>
            <p>${inputBuscar.value}</p><svg xmlns="http://www.w3.org/2000/svg" onclick='borrar(this)' class='bi bi-x-lg equis' width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
        </div>`;
            inputBuscar.value = '';
            inputBuscar.setAttribute('placeholder', 'Cuántos dormitorios necesitas?');
            top.innerHTML += template;
            

}
// Respuesta2  dormitorios
function dormitorios() {
    let top = document.querySelector('#top');
    let template = `<div class='muestra dormitorios' id='pestaña'><svg xmlns="http://www.w3.org/2000/svg" class="ionicon bed" viewBox="0 0 512 512"><title>Bed</title><path d="M384 240H96V136a40.12 40.12 0 0140-40h240a40.12 40.12 0 0140 40v104zM48 416V304a64.19 64.19 0 0164-64h288a64.19 64.19 0 0164 64v112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M48 416v-8a24.07 24.07 0 0124-24h368a24.07 24.07 0 0124 24v8M112 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16M256 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            <p>${inputBuscar.value}</p><svg xmlns="http://www.w3.org/2000/svg" onclick='borrar(this)' class='bi bi-x-lg equis' width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
        </div>`;
            inputBuscar.value = '';
            inputBuscar.setAttribute('placeholder', 'En qué zona te gustaria buscar?');
            top.innerHTML += template;
}

// Respuesta3 Zona
function zona() {
    let top = document.querySelector('#top');
    let template = `<div class='muestra zona' id='pestaña'><svg xmlns="http://www.w3.org/2000/svg" class="ionicon brujula" viewBox="0 0 512 512"><title>Compass</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M350.67 150.93l-117.2 46.88a64 64 0 00-35.66 35.66l-46.88 117.2a8 8 0 0010.4 10.4l117.2-46.88a64 64 0 0035.66-35.66l46.88-117.2a8 8 0 00-10.4-10.4zM256 280a24 24 0 1124-24 24 24 0 01-24 24z"/></svg>
            <p>${inputBuscar.value}</p><svg xmlns="http://www.w3.org/2000/svg" onclick='borrar(this)' class='bi bi-x-lg equis' width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
        </div>`;
            inputBuscar.value = '';
            inputBuscar.setAttribute('placeholder', '¿Tipo de vivienda?');
            top.innerHTML += template;
            

}





function lupa() {
   let tipeo = inputBuscar.value.toLowerCase();
   console.log(tipeo)
    if (tipeo.trim() === 'alquilar' || tipeo.trim() === 'comprar') {
        alquilar();
    } else if (tipeo.trim() === '1 dormitorio' || tipeo.trim() === '2 dormitorios' || tipeo.trim() === '3 dormitorios') {
        dormitorios();
    }else if (tipeo.trim() === 'norte' || tipeo.trim() === 'sur' || tipeo.trim() === 'este' || tipeo.trim() === 'oeste'){
        zona()
    } 
    else {
        inputBuscar.value = 'No coincide';
        setTimeout(() => { inputBuscar.value = '' }, 2000);
    }
}