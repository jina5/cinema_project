$(function(){
    $('.btn').click(function(){
        $('.popup_box').css('display', 'block');
    })
    $('.close').click(function(){
        $('.popup_box').css('display', 'none');
        $('.blur').css('display', 'none');
    });
})