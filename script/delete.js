window.onload = function(){
    var nav = document.querySelector('nav');
    console.log(nav.offsetHeight);       
    var sub_menu_container = document.querySelector('#sub_menu_container');         
    var sub_menu_height = sub_menu_container.scrollHeight;
    sub_menu_height += "px";
    console.log(sub_menu_height);

    nav.onmouseenter = () => {
        sub_menu_container.style.height = sub_menu_height;
    }
    nav.onmouseleave = () => {
        sub_menu_container.style.height = "0px";
    }
    var sub_menu_li = document.querySelectorAll('#sub_menu_container a');
    for(i=0;i<sub_menu_li.length;i++){
        sub_menu_li[i].onclick = () => {
            sub_menu_container.style.height = "0px";
        }
    }

    $('.btn_delete').click(function(){
        $('.popup_box').css('display', 'block');
        $('.blur').css('display', 'block');
    });
    
    $('.close').click(function(){
        $('.popup_box').css('display', 'none');
        $('.blur').css('display', 'none');
    });
    
    $('.popup_cancle').click(function(){
        $('.popup_box').css('display', 'none');
        $('.blur').css('display', 'none');
    });
    
    $('.popup_update').click(function(){
        $('.popup_box').css('display', 'none');
        $('.blur').css('display', 'none');
        alert('정상적으로 탈퇴되었습니다.');
    });
}