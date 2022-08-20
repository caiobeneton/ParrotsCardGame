let cartasViradas = 0;
let jogadas = 0;

let qtdeCartas = 0;
while (qtdeCartas < 4 || qtdeCartas > 14 || qtdeCartas % 2 !== 0) {
   qtdeCartas = prompt('Com quantas cartas você quer jogar? \nEscolha um número par entre 4 e 14')
}

const deck = ['assets/bobrossparrot.gif','assets/explodyparrot.gif','assets/fiestaparrot.gif','assets/metalparrot.gif','assets/revertitparrot.gif','assets/tripletsparrot.gif','assets/unicornparrot.gif'];

deck.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}

const novoDeck = [];

for (let i = 0; i < qtdeCartas/2; i++) {
    novoDeck[i] = deck[i];
}

const deckPronto = [...novoDeck, ...novoDeck];
deckPronto.sort(comparador);

const ul = document.querySelector('ul');

for (let i = 0; i < qtdeCartas; i++) {
    ul.innerHTML += `<li>
        <div class="carta" onclick="viraCarta(this)">
            <img class='carta-frente' src="assets/front.png" alt="">
            <img class='carta-costas' src="${deckPronto[i]}" alt="">
        </div>
        </li>`
}
function viraCarta(item) {
    cartasViradas++
    
    const fala = item.querySelector('.carta :nth-child(2)')
    const falaimg = fala.getAttribute('src')
    console.log(falaimg)

    if (cartasViradas <= 2) {
        item.classList.add('virada');
    }
    if (cartasViradas === 2) {
        jogadas++
        confereCartas();
    }
}
function desviraCarta() {
    const desvirar = document.querySelectorAll('.virada:not(.igual)');
    desvirar[0].classList.remove('virada');
    desvirar[1].classList.remove('virada');
    cartasViradas = 0;
}
function confereCartas() {
    const cartasCheck = document.querySelectorAll('.virada:not(.igual)');
    const img1 = cartasCheck[0].querySelector('.carta :nth-child(2)').getAttribute('src');
    const img2 = cartasCheck[1].querySelector('.carta :nth-child(2)').getAttribute('src');

    if (img1 === img2){
        cartasCheck[0].classList.add('igual');
        cartasCheck[1].classList.add('igual');
        cartasViradas = 0;
    }
    else {
        setTimeout(desviraCarta, 1000);
    }
    
}
