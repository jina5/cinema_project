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
    var area = document.querySelector('#area');
            var theater = document.querySelector('#theater');
            var gg = document.querySelectorAll('.gg');
            var sl = document.querySelectorAll('.sl');
            area.onchange = () => {
                theater.disabled = false;                    
                if(area.value == 0) {
                    theater.disabled = true;
                }else if(area.value == 'seoul') {
                    for(i=0;i<gg.length;i++) {
                        gg[i].style.display = 'none';
                        for(j=0;j<sl.length;j++) {
                            sl[j].style.display = 'initial';
                        }
                    }      
                }else if(area.value == 'gyunggi') {
                    for(i=0;i<sl.length;i++) {
                        sl[i].style.display = 'none';
                        for(j=0;j<gg.length;j++) {
                            gg[j].style.display = 'initial';
                        }
                    }
                }
            }
            

            var mail = document.querySelector('#mail');
            var direct = document.querySelector('#direct');
            
            mail.onchange = () => {
                if(mail.value == 4) {
                    direct.style.display = 'initial';
                }else {
                    direct.style.display = 'none';
                }
            }
            function contentLength() {
                var content = document.querySelector('#content');
                var ct_length = document.querySelector('.length');
                if(content.value.length > 2000) {
                    content.value = content.value.substr(0,2000);
                    return false;
                }
                ct_length.innerHTML = `${content.value.length} / 2000`;
                return true;
            }
            
            content.onkeyup = contentLength;

            frm.onsubmit = (e) => {
                if(!contentLength()) {
                    e.preventDefault();
                }
            }

}