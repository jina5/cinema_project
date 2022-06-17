        window.onload = () => {
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
            }
        }
