$('.ab__1 a').click(function (){
    if ($('.ab__1 .hidden__div').hasClass('hidden')) {
        var height = $('.ab__1 .hidden__div').height();
        $('.ab__2').css('margin-top', String(height+100)+'px');
        $('.ab__1 .hidden__div').removeClass('hidden');
        setTimeout(() => { $('.ab__1 .hidden__div').css('display', 'flex'); }, 1000)
    } else{
        var height = $('.hidden').height();
        $('.ab__2').css('margin-top', '0px');
        $('.ab__1 .hidden__div').addClass('hidden');
        setTimeout(() => { $('.ab__1 .hidden__div').css('display', 'none'); }, 1000)
}})

$('document').ready(function () {
    
    $('.ab__2 a').click(function (){
        console.log('123')
        if ($('.ab__2 .hidden__div').hasClass('hidden')) {
            var height = $('.ab__2 .hidden__div').height();
            $('.about__con').css('margin-top', String(height+200)+'px');
            $('.ab__2 .hidden__div').removeClass('hidden');
            setTimeout(() => { $('.ab__2 .hidden__div').css('display', 'flex'); }, 1000)
    
        } else{
            var height = $('.hidden').height();
            $('.about__con').css('margin-top', '0px');
            $('.ab__2 .hidden__div').addClass('hidden');
            setTimeout(() => { $('.ab__2 .hidden__div').css('display', 'none'); }, 1000)
    }})
    
})

