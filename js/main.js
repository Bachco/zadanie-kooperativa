
const noLink = [... document.querySelectorAll('.no-link')];
const moreMenu = [... document.querySelectorAll('.menu__item--dropdown')];
const setActiveLink = [... document.querySelectorAll('.set-active-link')];
const dateInput = document.getElementById('date');
const textToogle = [... document.querySelectorAll('.text-toogle-header')];

if (!dateInput.value) {
    dateInput.closest('.form-date').classList.add('empty');
}

[... document.querySelectorAll('.conditions__tab-content')].forEach(el => {
    el.style.height = el.offsetHeight+"px";
    el.classList.add('on');
});
dateInput.onchange = function() {
    if (dateInput.value) {
        dateInput.closest('.form-date').classList.remove('empty');
    }
};

textToogle.forEach(el => {
    el.addEventListener('click', toogleActiveSecond);
});

moreMenu.forEach(el => {
    el.addEventListener("mouseover", addActive);
    el.addEventListener("mouseout", removeActive);
});

setActiveLink.forEach(el => el.addEventListener('click', toggleActive));
noLink.forEach(el => el.addEventListener("click", disableLink));

function addActive() {
	this.classList.add('active');
}

function removeActive() {
	this.classList.remove('active');
}

function disableLink(e) {
    e.preventDefault();
}

function toggleActive(e) {
    const parent = [... this.closest('.set-active-link-parent').querySelectorAll('.set-active-link')];
    e.preventDefault();
    parent.forEach(el => el.classList.remove('active'));    
    this.classList.add('active');    
}

function toogleActiveSecond() {
    if(this.closest('.text-toogle').classList.contains('active')) {
        this.closest('.text-toogle').classList.remove('active');
    } else {
        [... document.querySelectorAll('.text-toogle')].forEach(el => el.classList.remove('active'));
        this.closest('.text-toogle').classList.add('active');
    }
}