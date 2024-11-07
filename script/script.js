function mostrMenu() {
    $('nav#nav-esquerda ul.menu-principal').css('display', 'flex').hide().fadeIn(); 
    $('nav#nav-esquerda ul.menu-principal').addClass('animate__animated animate__fadeInRight animate__slow');

    $('nav#nav-esquerda ul#icone-menu li#menu').hide();
    $('nav#nav-esquerda ul#icone-menu li#menuX').show(); 
}

function esconderMenu() {
    $('nav#nav-esquerda ul.menu-principal').fadeOut(); 
    $('nav#nav-esquerda ul#icone-menu li#menu').show(); 
    $('nav#nav-esquerda ul#icone-menu li#menuX').hide(); 
}

let controle = true;

$('nav#nav-esquerda ul#icone-menu').click(function() {
    if (controle) {
        mostrMenu();
    } else {
        esconderMenu();
    }
    controle = !controle; 
});
