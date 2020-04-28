const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const shoeBg = document.querySelector('.shoeBackground');

let PrevColor = 'blue';
let animationEnd = true;

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active')
}

sizes.forEach(size => size.addEventListener('click', changeSize));

function changeColors(){
    if(!animationEnd){
        console.log('error')
        return;
    }
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${PrevColor}"]`)


    colors.forEach(color => color.classList.remove('active'));
    this.classList.add('active');
    document.documentElement.style.setProperty('--primary', primary);

    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');


    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');

    prevGradient.classList.add('second');

    prevColor = color;

    AnimationEnd = false;

    gradient.addEventListener('animationend', ()=> {
        AnimationEnd = true;
    })


    
}

colors.forEach(color => color.addEventListener('click', changeColors));

let x = window.matchMedia("(max-width:1000px)");

function changeHeight (){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoesBg.style.height = `${shoeHeight * 0.9}px`;
    }else{
        shoesBg.style.height = "475px";
    }
}
changeHeight();

window.addEventListener('resize', changeHeight);





