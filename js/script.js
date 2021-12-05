$('.checkbox__div input').click(function () {
    if ($(this).hasClass('checked')) {
        $(this).removeClass('checked');
        $('.checkbox__div .s2').removeClass('active');
        $('.checkbox__div .s1').addClass('active');
    } else{
        $(this).addClass('checked');
        $('.checkbox__div .s2').addClass('active');
        $('.checkbox__div .s1').removeClass('active');
    }
    
})