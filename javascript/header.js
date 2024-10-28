
const nav = document.querySelector('.nav')
const mobile = document.querySelector('.mobile-responstve');
const removeActive = document.querySelector('.responsive-delate');

mobile.onclick = () => {
    nav.classList.toggle('acitve');
};
removeActive.onclick = () => {
    nav.classList.remove('acitve');
};




