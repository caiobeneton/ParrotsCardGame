let qtdeCartas = 0;
while (qtdeCartas < 4 || qtdeCartas > 14 || qtdeCartas % 2 !== 0) {
   qtdeCartas = prompt('Com quantas cartas você quer jogar? \nEscolha um número par entre 4 e 14')
}

const ul = document.querySelector('ul');

for (let i = 0; i < qtdeCartas; i++) {
    ul.innerHTML += `<li><div class="carta"><img src="assets/front.png" alt=""></div></li>`
}