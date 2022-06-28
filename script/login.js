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

    
    function saveToDos(token) { //item을 localStorage에 저장합니다. 
        typeof(Storage) !== 'undefined' && sessionStorage.setItem('AccessKEY', JSON.stringify(token)); 
    };
    
    window.Kakao.init('c107017d3c78a41473933d3434b2865b');
    function kakaoLogout() {
        if (!Kakao.Auth.getAccessToken()) {
            console.log('Not logged in.');
		    return;
	    }
	    Kakao.Auth.logout(function(response) {
            // secession();
            alert(response +' logout');
		    window.location.href='login1.html'
	    });
    }
    function secession() {
        Kakao.API.request({
            url: '/v1/user/unlink',
            success: function(response) {
                console.log(response);
                //callback(); //연결끊기(탈퇴)성공시 서버에서 처리할 함수
                window.location.href='login1.html'
            },
            fail: function(error) {
                console.log('탈퇴 미완료')
                console.log(error);
            },
        });
    };
    
    function kakaoLogin() {
        window.Kakao.Auth.login({
            scope: 'profile_nickname, account_email', //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
            success: function(response) {
                saveToDos(response.access_token)  // 로그인 성공하면 사용자 엑세스 토큰 sessionStorage에 저장
                window.Kakao.API.request({ // 사용자 정보 가져오기 
                    url: '/v2/user/me',
                    success: (res) => {
                        const kakao_account = res.kakao_account;
                        alert('로그인 성공');
                        window.location.href='login1.html'
                    }
                });
            },
            fail: function(error) {
                console.log(error);
            }
        });
    };
    
    
    const login = document.querySelector('#kakaoLogin');
    login.addEventListener('click', kakaoLogin);
    const logout = document.querySelector('.kakaoLogout');
    logout.addEventListener('click', kakaoLogout);
    const sion = document.querySelector('.secession');
    sion.addEventListener('click', secession);
}