const navA = document.querySelectorAll('nav ul li a');
const $home = navA[0];
const $publicar = navA[1];
const $buscar = navA[2];
const $contacto = navA[3];

function act() {
	$home.classList.remove('active');
	$publicar.classList.remove('active');
	$buscar.classList.remove('active');
	$contacto.classList.remove('active');

	this.classList.add('active');
}
$home.addEventListener('click', act);
$publicar.addEventListener('click', act);
$buscar.addEventListener('click', act);
$contacto.addEventListener('click', act);


const left = document.querySelector('#fle-left');
const right = document.querySelector('#fle-right');

const fotoslide = ['./img/Hydrangeas.jpg','./img/Jellyfish.jpg','./img/Koala.jpg'];
const imgleft = document.querySelector('#imgleft');
const imgcenter = document.querySelector('#imgcenter');
const imgright = document.querySelector('#imgright');

let count = 0;
let count1 = 1;
let count2 = 2;
right.addEventListener('click', next);
left.addEventListener('click',prev);

function prev(){
	count--;
	count1--;
	count2--;
	if(count < 0){
		count = (fotoslide.length - 1) ;
	}
	imgcenter.src = fotoslide[count];

	if(count1 < 0){
		count1 = (fotoslide.length -1);
	}
	imgleft.src = fotoslide[count1];

	if(count2 < 0){
		count2 = (fotoslide.length - 1);
	}
	imgright.src = fotoslide[count2];

}

function next(){
	count++;
	count1++;
	count2++;
	if(count > fotoslide.length - 1){
		count = 0
	}
	imgcenter.src = fotoslide[count];
	
	if(count1 > fotoslide.length - 1){
		count1 = 0
	}
	imgright.src = fotoslide[count1];
	
	if(count2 > fotoslide.length - 1){
		count2 = 0
	}
	imgleft.src = fotoslide[count2];
}
// setInterval(next, 3000);


