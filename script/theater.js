window.onload = function () {
    //-----------------헤더
    var nav = document.querySelector('nav');
    var sub_menu_container = document.querySelector('#sub_menu_container');
    var sub_menu_height = sub_menu_container.scrollHeight;
    sub_menu_height += "px";

    nav.onmouseenter = () => {
        sub_menu_container.style.height = sub_menu_height;
    }
    nav.onmouseleave = () => {
        sub_menu_container.style.height = "0px";
    }
    var sub_menu_li = document.querySelectorAll('#sub_menu_container a');
    for (i = 0; i < sub_menu_li.length; i++) {
        sub_menu_li[i].onclick = () => {
            sub_menu_container.style.height = "0px";
        }
    }
    //-----------------섹션
    var seoul = document.querySelector('.seoul');
    var seoul_menu = document.getElementById('seoul');
    var gg = document.querySelector('.gg');
    var gg_menu = document.getElementById('gg');
    seoul.onclick = () => {
        seoul_menu.style.height = '100px';
        seoul_menu.style.display = '';
        seoul.style.backgroundColor = '#fb4357';
        seoul.style.color = 'white';
        gg.style.color = 'black';
        gg_menu.style.height = '0px';
        gg_menu.style.overflow = 'hidden';
        gg.style.backgroundColor = 'rgb(224,224,224)';
        theater_li[0].style.color = '#fb4357';
        theater_li[1].style.color = '';
        theater_li[2].style.color = '';
    }
    gg.onclick = () => {
        gg_menu.style.height = '100px';
        gg_menu.style.display = '';
        seoul.style.color = 'black';
        gg.style.color = 'white';
        gg.style.backgroundColor = '#fb4357';
        seoul_menu.style.height = '0px';
        seoul_menu.style.overflow = 'hidden';
        seoul.style.backgroundColor = 'rgb(224,224,224)';
        theater_li[3].style.color = '#fb4357';
        theater_li[4].style.color = '';
    }
    //--------- 극장 누르면 빨간색으로.. (한번에 처리 )
    var theater_li = document.querySelectorAll('.theater_sub_menu ul li a');
    theater_li[0].style.color = '#fb4357';
    theater_li[0].onclick = () => {
        for (i = 0; i < theater_li.length; i++) {
            theater_li[i].style.color = '';
        }
        theater_li[0].style.color = '#fb4357';
    }
    theater_li[1].onclick = () => {
        for (i = 0; i < theater_li.length; i++) {
            theater_li[i].style.color = '';
        }
        theater_li[1].style.color = '#fb4357';
    }
    theater_li[2].onclick = () => {
        for (i = 0; i < theater_li.length; i++) {
            theater_li[i].style.color = '';
        }
        theater_li[2].style.color = '#fb4357';
    }
    theater_li[3].onclick = () => {
        for (i = 0; i < theater_li.length; i++) {
            theater_li[i].style.color = '';
        }
        theater_li[3].style.color = '#fb4357';
    }
    theater_li[4].onclick = () => {
        for (i = 0; i < theater_li.length; i++) {
            theater_li[i].style.color = '';
        }
        theater_li[4].style.color = '#fb4357';
    }

    //----------------극장정보 상영시간표 관람료
    var detail_menu = document.querySelectorAll('.theater_detail_menu li a');
    var detail = document.querySelectorAll('.theater_detail_menu li');
    detail_menu[0].style.color = 'white';
    detail_menu[0].style.fontWeight = 'bold';
    detail_menu[0].style.fontSize = '23px';
    detail[0].style.backgroundColor = '#fb4357';

    detail_menu[0].onclick = () => {
        for (i = 0; i < detail_menu.length; i++) {
            detail_menu[i].style.color = '';
            detail_menu[i].style.fontWeight = '';
            detail_menu[i].style.fontSize = '';
            detail[i].style.backgroundColor = '';
        }
        detail_menu[0].style.color = 'white';
        detail_menu[0].style.fontWeight = 'bold';
        detail_menu[0].style.fontSize = '23px';
        detail[0].style.backgroundColor = '#fb4357';

    }
    detail_menu[1].onclick = () => {
        for (i = 0; i < detail_menu.length; i++) {
            detail_menu[i].style.color = '';
            detail_menu[i].style.fontWeight = '';
            detail_menu[i].style.fontSize = '';
            detail[i].style.backgroundColor = '';

        }
        detail_menu[1].style.color = 'white';
        detail_menu[1].style.fontWeight = 'bold';
        detail_menu[1].style.fontSize = '23px';
        detail[1].style.backgroundColor = '#fb4357';

    }
    detail_menu[2].onclick = () => {
        for (i = 0; i < detail_menu.length; i++) {
            detail_menu[i].style.color = '';
            detail_menu[i].style.fontWeight = '';
            detail_menu[i].style.fontSize = '';
            detail[i].style.backgroundColor = '';
        }
        detail_menu[2].style.color = 'white';
        detail_menu[2].style.fontWeight = 'bold';
        detail_menu[2].style.fontSize = '23px';
        detail[2].style.backgroundColor = '#fb4357';

    }
}