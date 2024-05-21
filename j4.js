const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('section');

window.onscroll = () => (
    section.foEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = set.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header [href*=' + id + ']').classList.add
            })
        }
    })
)

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};