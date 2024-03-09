var theme = 1;
fadeTheme();
const targetItems = document.querySelectorAll('[data-anime]');
const botaoPlay = document.getElementById('play-bt');
const botaoPause = document.getElementById('pause-bt');
const soundTrack = document.getElementById('track');
const printCod = document.querySelector('.printCodigo');
const idadeAtual = document.getElementById('idadeAtual');
const spans = document.querySelectorAll('.spanSkill');
var count = 0;


document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado da maneira tradicional

    var formData = new FormData(this); // Obtemos os dados do formulário

    // Transforma os dados do formulário em um objeto JSON
    var jsonData = {};
    formData.forEach(function(value, key){
        jsonData[key] = value;
    });

    // Envia os dados para o Firebase Realtime Database
    fetch('https://portfolio-1184f-default-rtdb.firebaseio.com/messages.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(function(response) {
        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            // Limpa o formulário após o envio
            document.getElementById('messageForm').reset();
        } else {
            alert('Ocorreu um erro ao enviar a mensagem.');
        }
    })
    .catch(function(error) {
        console.error('Erro:', error);
    });
});

spans[0].style.opacity = '1';    

setInterval(() => {
    switchSkill();
}, 3000);

function switchSkill() {

    if (count>4) {count=0};

    spans.forEach(function(span){
        span.style.opacity = '0'
    })

    
    spans[count].style.opacity = '1';
   

    count++;
} 

idadeAtual.addEventListener('mouseenter', function() {
    printCod.style.display = "block";
    printCod.style.zIndex = "1";
    setTimeout(function() {
        printCod.style.opacity = "1";
    }, 100);    
    
    var idade = calcularIdade();

    idadeAtual.style.opacity = "0";
        
    setTimeout(function() {
        idadeAtual.textContent += ` ,  ${idade.meses} meses e ${idade.dias} dias.` 
        idadeAtual.style.opacity = "1";
    }, 200);
})

idadeAtual.addEventListener('mouseleave', function() {
    printCod.style.opacity = "0";
    setTimeout(function() {
        printCod.style.display = "none";
    }, 200); 

    var idade = calcularIdade();

    idadeAtual.style.opacity = "0";
    
    
    
    setTimeout(function() {
        idadeAtual.textContent = `${idade.anos} anos*`
        idadeAtual.style.opacity = "1";
    }, 200);

    
})

botaoPlay.addEventListener("click", function() {
    soundTrack.pause();
    botaoPlay.style.display = "none";
    botaoPause.style.display = "block";
})

botaoPause.addEventListener("click", function() {
    soundTrack.play();
    soundTrack.volume = ".6"
    botaoPause.style.display = "none";
    botaoPlay.style.display = "block";
})

function fadeTheme() {
    
    var body = document.body;
    var botoeshd = document.querySelectorAll('.botaoheader');
    var botoesbd = document.querySelectorAll('.btn-40');
    var fundobt = document.querySelectorAll('.btn-40 .new')
    var header = document.querySelector('.header');
    var botoesaudio = document.querySelectorAll('.audio-bt');
    var returnBt = document.getElementById('returnHomeBt');
    var iconsSkill = document.querySelector('.icons-table');

    

    fundobt.forEach(function(fundo) {
        fundo.style.background = "rgb(187, 194, 201)";
    })

    if (theme == 1){

    body.classList.add('darkmode');
    header.classList.add('darkmodehd');
    
    returnBt.style.color = 'white';

    iconsSkill.style.color = 'white';
 
    botoesaudio.forEach(function(botao) {
        botao.style.color = "white";
    })
    
    for (var i = 0 ; i < botoesbd.length ; i++) {
        botoesbd[i].style.color = 'rgb(190, 196, 205)';

    }

    for (var i = 0 ; i < botoeshd.length ; i++) {
        botoeshd[i].style.color = 'white';
    }
    theme=2;
    return;
    }

    botoesaudio.forEach(function(botao) {
        botao.style.color = "rgb(49,49,49)";
    })

    body.classList.remove('darkmode');
    header.classList.remove('darkmodehd');

    var returnBt = document.getElementById('returnHomeBt');
    returnBt.style.color = 'rgb(49,49,49)';

    fundobt.forEach(function(fundo) {
        fundo.style.background = "rgb(49, 49, 49)";
    })

    iconsSkill.style.color = 'rgb(49, 49, 49)';
    
        
    for (var i = 0 ; i < botoesbd.length ; i++) {
        botoesbd[i].style.color = 'rgb(49, 49, 49)';
    }

    for (var i = 0 ; i < botoeshd.length ; i++) {
        botoeshd[i].style.color = 'rgb(49,49,49)';
    }
    theme=1;      
}

function copyEmail() {
    var spanCopy = document.querySelector('.alert-copy');

    navigator.clipboard.writeText('LamannaBryan@gmail.com');

   
    spanCopy.style.opacity = '1';
    spanCopy.style.visibility = 'visible';  

    setTimeout(function() {
        spanCopy.style.opacity = '0';
        spanCopy.style.visibility = 'hidden';
        
    }, 5000); 
    

}

function showSkill(index) {
    var txtSkill = document.querySelectorAll('[data-animeSkill]');
    var skillIcon = document.querySelectorAll('.animeskill');
    const skillHelp = document.querySelector('.skillHelp');
    skillHelp.style.opacity = '0';

    skillIcon.forEach(icon => {
        icon.classList.remove('selected-icon')   
    })

    skillIcon[index].classList.add('selected-icon');

    txtSkill.forEach(txt => {
        txt.classList.remove('animate');

    });
    
    txtSkill[index].classList.add('animate');
}

function animeScroll() {
    const windowTop = window.pageYOffset+800;
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
    if (document.documentElement.scrollTop > 3700) {
        
        button.style.opacity = "1";
    } else {
        button.style.opacity = "0";
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.header-box a');
    
    function highlightCurrentSection() {
        const currentSectionId = findCurrentSection();
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('sectionActive');
            } else {
                link.classList.remove('sectionActive');
            }
        });
    }

    function findCurrentSection() {
        const sections = document.querySelectorAll('section');
        let currentId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 50) {
                currentId = section.getAttribute('id');
            }
        });
        return currentId;
    }

    highlightCurrentSection();

    window.addEventListener('scroll', highlightCurrentSection);
});

  
/*function sectionActive() {  
    var ancHome = document.querySelector('.info');
    var ancAbout = document.querySelector('#profile');
    var ancSkill = document.querySelector('.tabela-tecnologias');
    var ancProject = document.querySelector('.projects');
    var ancContact = document.querySelector('.info-contatos');

    var section = [ancHome, ancAbout, ancSkill, ancProject, ancContact];

    var headerSub = document.querySelectorAll('.botaoheader');
    
    

    for (var i = 0 ; i < section.length ; i++) {
        if (isElementInViewport(section[i])) {
            console.log(section[i]);
            headerSub[i+1].classList.add('sectionActive');
        } else {
            headerSub[i+1].classList.remove('sectionActive');
        }
    }
}*/

//função executada ao carregar a página

function calcularIdade() {
    // Data de nascimento
    const dataNascimento = new Date('1997-06-23');
    
    // Data atual
    const dataAtual = new Date();
    
    // Calcula a diferença em milissegundos entre as duas datas
    const diferencaMilissegundos = dataAtual - dataNascimento;
    
    // Converte a diferença de milissegundos para anos, meses e dias
    const milissegundosPorAno = 1000 * 60 * 60 * 24 * 365.25; // Considerando anos bissextos
    const anos = Math.floor(diferencaMilissegundos / milissegundosPorAno);
    
    // Calcula os meses restantes após subtrair os anos
    const milissegundosRestantes = diferencaMilissegundos % milissegundosPorAno;
    const milissegundosPorMes = milissegundosPorAno / 12;
    const meses = Math.floor(milissegundosRestantes / milissegundosPorMes);
    
    // Calcula os dias restantes após subtrair os anos e meses
    const milissegundosRestantesDias = milissegundosRestantes % milissegundosPorMes;
    const dias = Math.floor(milissegundosRestantesDias / (1000 * 60 * 60 * 24));
    
    return {
      anos,
      meses,
      dias
    };
  }

window.addEventListener('scroll', function(){
    animeScroll();
})

window.addEventListener('DOMContentLoaded', function() {
    const botoesSkill = document.querySelectorAll('.animeskill');
    const images = document.querySelector('#iconcode');
    var idadeAtual = document.querySelector('#idadeAtual');
    
    const dataNascimento = new Date('1997-06-23');
    const idade = calcularIdade(dataNascimento);
    idadeAtual.textContent = `${idade.anos} anos*`;

    function applyAnimation(element, delay) {
      setTimeout(() => {
        element.style.animation = 'bounce 4s ease infinite';
      }, delay);
    }
    
   
    const homeItems = document.querySelectorAll('[data-animeHome]');
    homeItems.forEach(item => {
        item.classList.add('animate');
    });    
})

