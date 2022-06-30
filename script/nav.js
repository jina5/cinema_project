window.onload = function(){
    var nav = document.querySelector('#nav');
    var sub_menu_container = document.querySelector('#sub_menu_container'); 
    var nav_container = document.querySelector('#nav_container');       
    var sub_menu_height = sub_menu_container.scrollHeight;
    sub_menu_height += "px";
    nav.style.height = "55px"
    nav.onmouseenter = () => {
        sub_menu_container.style.height = sub_menu_height;
        nav_container.style.height = "180px";
        nav.style.height = "180px"
    }
    nav.onmouseleave = () => {
        sub_menu_container.style.height = "0px";
        nav.style.height = "55px"
    }
    var sub_menu_li = document.querySelectorAll('#sub_menu_container a');
    for(i=0;i<sub_menu_li.length;i++){
        sub_menu_li[i].onclick = () => {
            sub_menu_container.style.height = "0px";
            nav_container.style.height = "55px";
            nav.style.height = "55px"
        }
    }
}