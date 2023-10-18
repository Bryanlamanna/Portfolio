
var txtSkill = document.querySelectorAll('.texto-tecnologias');

for (var i = 0 ; i < txtSkill.length ; i++) {
    txtSkill[i].style.display = 'none';
}

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

function copyEmail() {

navigator.clipboard.writeText('LamannaBryan@gmail.com');

}

function show(index) {
var txtSkill = document.querySelectorAll('.texto-tecnologias');

var txtSkill = document.querySelectorAll('.texto-tecnologias');

for (var i = 0 ; i < txtSkill.length ; i++) {
    txtSkill[i].style.display = 'none';
}

txtSkill[index].style.display = 'block';
}
