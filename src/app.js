import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Variables

const valores = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const palos = [
  {palo: '♥', color: 'red'},
  {palo: '♦', color: 'red'},
  {palo: '♠', color: 'black'},
  {palo: '♣', color: 'black'},
];

//Funciones

function crearBaraja() {
  const baraja = [];
  palos.forEach(palo => {
    valores.forEach(valor => {
      baraja.push ({ valor: valor, palo: palo.palo, color: palo.color });
    });
  });
  return baraja;
};

function cartaAleatoria(baraja) {
  const naipe = Math.floor(Math.random()*baraja.length);
  return baraja[naipe];
}

function renderCarta(carta) {
const contenedor = document.getElementById('card-container');
contenedor.innerHTML = '';


const divTop = document.createElement('div');
divTop.classList.add('card-symbol-top');
divTop.innerText = carta.palo;
divTop.style.color = carta.color

const divValue = document.createElement('div');
divValue.classList.add('card-value');
divValue.innerText = carta.valor;
divValue.style.color = carta.color

const divBottom = document.createElement('div');
divBottom.classList.add('card-symbol-bottom');
divBottom.innerText = carta.palo;
divBottom.style.color = carta.color

contenedor.appendChild(divTop);
contenedor.appendChild(divValue);
contenedor.appendChild(divBottom);

}

// Eventos

window.onload = function() {
  const baraja = crearBaraja();
  const carta = cartaAleatoria(baraja);
  renderCarta(carta);


const cardMazo = document.getElementById('card-mazo');
cardMazo.addEventListener('click', () => {
  const nuevaCarta = cartaAleatoria(baraja);
  renderCarta(nuevaCarta);
});

};


