window.onload = function () {

    var tab = document.querySelectorAll('.tab-menu li');
    tab[0].onclick = () => {
        tab[0].classList.add('on');
        tab[1].classList.remove('on');
        tab[2].classList.remove('on');
    }
    tab[1].onclick = () => {
        tab[1].classList.add('on');
        tab[0].classList.remove('on');
        tab[2].classList.remove('on');
    }
    tab[2].onclick = () => {
        tab[2].classList.add('on');
        tab[1].classList.remove('on');
        tab[0].classList.remove('on');
    }
}