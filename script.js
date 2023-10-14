
var theme = 1;


    var body = document.body;
    var botoeshd = document.querySelectorAll('.botaoheader');
    var botoesbd = document.querySelectorAll('.botaobody');


    body.classList.add('darkmode');
    
    for (var i = 0 ; i < botoesbd.length ; i++) {
        botoesbd[i].style.color = 'white';
    }

    for (var i = 0 ; i < botoeshd.length ; i++) {
        botoeshd[i].style.color = 'white';
    }

    


function fade() {
    
    var body = document.body;
    var botoeshd = document.querySelectorAll('.botaoheader');
    var botoesbd = document.querySelectorAll('.botaobody');

    if (theme == 1){
    body.classList.add('darkmode');
    
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
        
    for (var i = 0 ; i < botoesbd.length ; i++) {
        botoesbd[i].style.color = 'black';
    }

    for (var i = 0 ; i < botoeshd.length ; i++) {
        botoeshd[i].style.color = 'black';
    }
    theme=1;      
}

function fadetolight() {
    var body = document.body;

    body.classList.remove('darkmode');
}