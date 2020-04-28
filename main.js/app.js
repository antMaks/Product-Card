const sizes = document.querySelectorAll('.size')

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active')
}

sizes.forEach(size => size.addEventListener('click', changeSize));


const colors = document.querySelectorAll('.color')

function changeColors(){
    colors.forEach(color => color.classList.remove('active'));
    this.classList.add('active');
}

colors.forEach(color => color.addEventListener('click', changeColors));

