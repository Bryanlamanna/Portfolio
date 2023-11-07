var theme = 1;
const targetItems = document.querySelectorAll('[data-anime]');
const botaoPlay = document.getElementById('play-bt');
const botaoPause = document.getElementById('pause-bt');
const soundTrack = document.getElementById('track');

botaoPlay.addEventListener("click", function() {
    soundTrack.pause();
    botaoPlay.style.display = "none";
    botaoPause.style.display = "block";
})

botaoPause.addEventListener("click", function() {
    soundTrack.play();
    botaoPause.style.display = "none";
    botaoPlay.style.display = "block";
})

function fadeTheme() {
    
    var body = document.body;
    var botoeshd = document.querySelectorAll('.botaoheader');
    var botoesbd = document.querySelectorAll('.botaobody');
    var header = document.querySelector('.header');
    var botoesaudio = document.querySelectorAll('.audio-bt');


    if (theme == 1){
    body.classList.add('darkmode');
    header.classList.add('darkmodehd');

    var returnBt = document.getElementById('returnHomeBt');
    returnBt.style.color = 'white';
 
    botoesaudio.forEach(function(botao) {
        botao.style.color = "white";
    })
    
    for (var i = 0 ; i < botoesbd.length ; i++) {
        botoesbd[i].style.color = 'white';
    }

    for (var i = 0 ; i < botoeshd.length ; i++) {
        botoeshd[i].style.color = 'white';
    }
    theme=2;
    return;
    }

    botoesaudio.forEach(function(botao) {
        botao.style.color = "black";
    })

    body.classList.remove('darkmode');
    header.classList.remove('darkmodehd');

    var returnBt = document.getElementById('returnHomeBt');
    returnBt.style.color = 'black';
    
        
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

function animeScroll() {
    const windowTop = window.pageYOffset+600;
    targetItems.forEach(function(elemento) {
        if (windowTop > elemento.offsetTop){
            elemento.classList.add('animate');
        }
    })
}

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight
    );
  }

  window.onscroll = function() {
    var button = document.getElementById("returnHomeBt");
    if (document.documentElement.scrollTop > 2600) {
        
        button.style.opacity = "1";
    } else {
        button.style.opacity = "0";
    }
};
  
function sectionActive() {  
    var ancHome = document.querySelector('.info');
    var ancAbout = document.querySelector('#text-about');
    var ancSkill = document.querySelector('.tabela-tecnologias');

    var section = [ancHome, ancAbout, ancSkill];

    var headerSub = document.querySelectorAll('.botaoheader');

    for (var i = 0 ; i < section.length ; i++) {
        if (isElementInViewport(section[i])) {
            headerSub[i+1].classList.add('sectionActive');
        } else {
            headerSub[i+1].classList.remove('sectionActive');
        }
    }
}

window.addEventListener('scroll', function(){
    animeScroll();
    sectionActive(); 
})

window.addEventListener('DOMContentLoaded', function() {
    const botoesSkill = document.querySelectorAll('.animeskill');
    const images = document.querySelector('#iconcode');
        
    function applyAnimation(element, delay) {
      setTimeout(() => {
        element.style.animation = 'bounce 4s ease infinite';
      }, delay);
    }
    
    for (let i = 0; i < botoesSkill.length; i++) {
      const delay = i * 100; // Aumentei o atraso para 600ms (0.6 segundos) para criar um efeito de um após o outro
      applyAnimation(botoesSkill[i], delay);
    }
    const homeItems = document.querySelectorAll('[data-animeHome]');
    homeItems.forEach(item => {
        item.classList.add('animate');
    });    
})

