        
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
            } // nav 자바스크립트
            var mainmenu = document.querySelectorAll('.mainmenu_line');
            var submenu = document.querySelectorAll('.subMenu');
            // console.log(submenu);
            var height = submenu[0].scrollHeight;
            console.log(height);
            for(i=0;i<mainmenu.length;i++) {
                // console.log(submenu[i].style.height);
                mainmenu[i].onclick = function() {
                    // console.log(this.nextElementSibling);
                    if(this.nextElementSibling.style.height == '0px') {
                        this.nextElementSibling.style.height = "130px";
                        this.nextElementSibling.style.padding = "20px 30px";
                    }
                    else {
                        this.nextElementSibling.style.height = "0px";
                        this.nextElementSibling.style.padding = "0px 0px";
                    }
                }
            } // faq 자바스크립트
        } 
