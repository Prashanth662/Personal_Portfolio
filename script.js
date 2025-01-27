const background = document.querySelector('.background');

function createDot(){
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = Math.random() * 100 +'vw';
    dot.style.animationDuration = Math.random() * 9 +5 +'s';
    background.appendChild(dot);
    setTimeout(()=>{
        dot.remove();
    },10000);
}

setInterval(createDot, 150);

function toggleNavbar() {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("open-navbar");
}
