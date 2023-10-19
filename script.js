    
function fadeTheme() {
    
    var body = document.body;
    var botoeshd = document.querySelectorAll('.botaoheader');
    var botoesbd = document.querySelectorAll('.botaobody');
    var header = document.querySelector('.header');


    if (theme == 1){
    body.classList.add('darkmode');
    header.classList.add('darkmodehd');
    
    for (var i = 0 ; i < botoesbd.length ; i++) {
        botoesbd[i].style.color = 'white';
    }

    for (var i = 0 ; i < botoeshd.length ; i++) {
        botoeshd[i].style.color = 'white';
    }
    theme=2;
    return;
    }

    body.classList.remove('darkmode');
    header.classList.remove('darkmodehd');
        
    for (var i = 0 ; i < botoesbd.length ; i++) {
        botoesbd[i].style.color = 'black';
    }

    for (var i = 0 ; i < botoeshd.length ; i++) {
        botoeshd[i].style.color = 'black';
    }
    theme=1;      
}

function copyEmail() {

    navigator.clipboard.writeText('LamannaBryan@gmail.com');

}

function showSkill(index) {
    var txtSkill = document.querySelectorAll('[data-animeSkill]');

    txtSkill.forEach(txt => {
        txt.classList.remove('animate');
    });
    
    txtSkill[index].classList.add('animate');
}

const targetItems = document.querySelectorAll('[data-anime]')


function animeScroll() {
    const windowTop = window.pageYOffset+600;
    targetItems.forEach(function(elemento) {
        if (windowTop > elemento.offsetTop){
            elemento.classList.add('animate');
        }
    })
}

window.addEventListener('scroll', function(){
    animeScroll();
})

window.addEventListener('DOMContentLoaded', function() {
    
    var theme = 1;
    var body = document.body;
    var botoeshd = document.querySelectorAll('.botaoheader');
    var botoesbd = document.querySelectorAll('.botaobody');
    var header = document.querySelector('.header');

    header.classList.add('darkmodehd');
    body.classList.add('darkmode');
    
    for (var i = 0 ; i < botoesbd.length ; i++) {
        botoesbd[i].style.color = 'white';
    }

    for (var i = 0 ; i < botoeshd.length ; i++) {
        botoeshd[i].style.color = 'white';
    }

    const homeItems = document.querySelectorAll('[data-animeHome]');
    homeItems.forEach(item => {
        item.classList.add('animate');
    });

    

})
