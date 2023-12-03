(() => {
    'use strict'
    /**
     * 2C = two of clubs
     * 2D = two of diamonds
     * 2H = two of hearts
     * 2S = two of spades
     */
    let deck = [], puntosJugadores = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    // Referencia al HTML
    const btnNuevoJuego = document.querySelector('#btnNuevoJuego'),
          btnPedirCarta = document.querySelector('#btnPedirCarta'),
          btnDetener = document.querySelector('#btnDetener'),
          divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');

    const iniciarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }

        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );

        btnPedirCarta.disabled   = false;
        btnDetener.disabled = false;
    }

    // Funcion para crear la baraja
    const crearDeck = () => {
        deck = [];  // deck.splice(0, deck.length)

        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }
        for (let especial of especiales) {
            for (let tipo of tipos) {
                deck.push(especial + tipo);
            }
        }

        // Revolver baraja y retornarla 
        return _.shuffle(deck);
    }

    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }

        return deck.pop();
    }

    const valorCarta = (carta) => {
        // Extraemos el valor de la carta AH -> A 
        const valor = carta.substring(0, carta.length - 1);
        // Puntos de la carta AH -> 11
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1; // parseInt(valor);
    }
    
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno]
    }

    const crearCarta = (carta, turno) => {
        // <img class="carta" src="./assetes/cartas/10C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `./assetes/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);

    }

    const ganador = () => {
        const [puntosJugador, puntosComputadora] = puntosJugadores;
        setTimeout(() => {
            (puntosComputadora === puntosJugador) ? alert('Empate')
                : ((puntosComputadora && puntosComputadora) > 21) ? alert('Nadie gana')
                    : (puntosComputadora <= 21) ? alert('Computadora gana') : alert('Nadie gana');
        }, 250);

    }

    const turnoComputadora = ( puntosJugador ) => {
        let puntosComputadora = 0;

        while ((puntosComputadora < puntosJugador) && (puntosComputadora <= 21)) {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1 );
            crearCarta(carta, puntosJugadores.length - 1 );
        }
        ganador();

    }

    // Eventos
    btnNuevoJuego.addEventListener('click', () => {
        iniciarJuego(2);
    });

    btnPedirCarta.addEventListener('click', () => {
        // Una funcion como argumento se conoce como callback
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta(carta, 0);
        
        if (puntosJugador > 21 || puntosJugador === 21) {
            btnPedirCarta.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }

    });

    btnDetener.addEventListener('click', () => {
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);

    });

})();