function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
              
            
            } 

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();
}
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

    function checkNick(){
        // var nick = document.querySelector('#nick');
        // var nick_length = document.querySelector('#nick_length');
        // if(nick.value.length > 20){
        //     nick.value = nick.value.substr(0,20);
        //     return false;
        // }
        // nick_length.innerHTML = `${nick.value.length}/20`;
        // return true;
        if($('#nick').val().length() > 20) {
            $('#nick').val() = $('#nick').val(substr(0,20));
            return false;
        }
        $('#nick_length').html($('#nick').val().length() + '/20');
        return true;
    }

    function passCheck(){
        var reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,20}$/;
        if(!reg.test($('#passwd').val())){
            $('.pass_check').html('암호 형식에 일치하지 않습니다.');
            $('.pass_check').removeClass('true').addClass('false');
            return false;
        }else if($('#passwd').val() != $('#pass_chk').val()){
            $('.pass_check').html('암호가 일치하지 않습니다.');
            $('.pass_check').removeClass('true').addClass('false');
            return false;
        }
        $('.pass_check').html('암호가 정상적으로 입력되었습니다.');
        $('.pass_check').removeClass('false').addClass('true');
        return true;      
    }

        $('#passwd').keyup(passCheck);
        $('#pass_chk').keyup(passCheck);
        $('#nick').keyup(checkNick);

            $("#frm").submit((e) => {
                if(!passCheck())
                    e.preventDefault();
                else if(!checkNick())
                    e.preventDefault();    
            });
            
            // $('#mail').change(function(){
            //     // console.log($('#mail').val())
            //     if($('#mail').val() == 0)
            //         $('#direct').css('display', 'initial')
            //         else 
            //         $('#direct').css('display', 'none')
                    
            // });

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