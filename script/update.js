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

    function passCheck(){
        var reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,20}$/;
        if(!reg.test($('#passwd').val())){
            $('.passwd_result').html('암호 형식에 일치하지 않습니다.');
            $('.passwd_result').removeClass('true').addClass('false');
            return false;
        }else if($('#passwd').val() != $('#pass_chk').val()){
            $('.passwd_result').html('암호가 일치하지 않습니다.');
            $('.passwd_result').removeClass('true').addClass('false');
            return false;
        }
        $('.passwd_result').html('암호가 정상적으로 입력되었습니다.');
        $('.passwd_result').removeClass('false').addClass('true');
        return true;      
    }

    $('#passwd').keyup(passCheck);
            $('#pass_chk').keyup(passCheck);
            
            $("#frm").submit((e) => {
                if(!passCheck())
                    e.preventDefault();
            });
            
            $('#mail').change(function(){
                // console.log($('#mail').val())
                if($('#mail').val() == 0)
                    $('#direct').css('display', 'initial')
                    else 
                    $('#direct').css('display', 'none')
                    
            });

            $('.btn_save').click(function(){
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
                alert('회원정보가 수정되었습니다.');
            });
}