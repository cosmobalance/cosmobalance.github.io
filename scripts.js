let saldo_jugadorA = {"USDT": 0, "EURO": 0, "CREDITOS": 0};
let saldo_jugadorB = {"USDT": 0, "EURO": 0, "CREDITOS": 0};

function getConversionRate(fromCurrency, toCurrency) {
    if (fromCurrency === "USDT" && toCurrency === "EURO") {
        return parseFloat(document.getElementById("usdtToEuro").value);
    } else if (fromCurrency === "EURO" && toCurrency === "USDT") {
        return parseFloat(document.getElementById("euroToUsdt").value);
    } else {
        let key = `${fromCurrency}_TO_${toCurrency}`;
        let rates = {
            "USDT_TO_USDT": 1,
            "EURO_TO_EURO": 1,
            "CREDITOS_TO_EURO": 1.4 / 50,
            "CREDITOS_TO_USDT": 1.5 / 50,
            "USDT_TO_CREDITOS": 50 / 1.5,
            "EURO_TO_CREDITOS": 50 / 1.4
        };
        return rates[key] || 1;
    }
}


// Obtener elementos select
let monedaAElement = document.getElementById("monedaA");
let monedaBElement = document.getElementById("monedaB");

$("#monedaA").on('select2:select', calculateBets);
$("#monedaB").on('select2:select', calculateBets);

function calculateBets() {
    let apuestaA = parseFloat(document.getElementById("apuestaA").value);
    
    // Si apuestaA no es un número o es igual a 0
    if (isNaN(apuestaA) || apuestaA === 0) {
        document.getElementById("apuestaBOutput").value = ""; // Dejar en blanco
        return; // Salir de la función
    }

    let monedaA = monedaAElement.value;
    let monedaB = monedaBElement.value;

    let apuestaB = convertCurrency(apuestaA, monedaA, monedaB);

    document.getElementById("apuestaBOutput").value = apuestaB;
}

document.getElementById("apuestaA").addEventListener('input', function(e) {
    let value = parseFloat(e.target.value);
    if (value < 0) {
        e.target.value = ""; // Puedes cambiarlo a 0 si prefieres
        alert("Introduzca una apuesta positiva");
    } else {
        calculateBets();
    }
});

document.getElementById("monedaA").addEventListener('change', calculateBets);
document.getElementById("monedaB").addEventListener('change', calculateBets);



function convertCurrency(amount, fromCurrency, toCurrency) {
    let rate = getConversionRate(fromCurrency, toCurrency);
    return Math.round(amount * rate);
}

// Aquí puedes agregar tu función getConversionRate()...







// ... (código previo)

function getCommission(amount, currency) {
    switch (currency) {
        case "USDT":
        case "EURO":
            return Math.floor(amount * 0.1);
            
        case "CREDITOS":
            return calcularComisionCreditos(amount);
        default:
            return 0;
    }
}

// scripts.js

// ... (otros códigos)

/**
 * Calcula el valor basado en bloques de créditos.
 * Los créditos se dividen en bloques de 500 a partir de los 1000 créditos.
 * @param {number} cantidad_creditos - El total de créditos a evaluar.
 * @return {number|null} - El valor calculado o null si la cantidad es menor a 1000.
 */
function calcularValor(cantidad_creditos) {
    const CREDITO_MINIMO = 1000;
    const TAMANO_BLOQUE = 500;
    const VALOR_BASE = 100;
    const VALOR_POR_BLOQUE = 50;
    
    if (cantidad_creditos < CREDITO_MINIMO) {
        return null; // o cualquier otro valor por defecto
    }
    
    let bloque = Math.floor((cantidad_creditos - CREDITO_MINIMO) / TAMANO_BLOQUE);
    return VALOR_BASE + VALOR_POR_BLOQUE * bloque;
}

function calcularComisionCreditos(cantidad_creditos) {
    if (cantidad_creditos >= 1000) {
        return calcularValor(cantidad_creditos);
    }

    // Aquí incluyes toda la lógica anterior que proporcionaste
    if (10 <= cantidad_creditos && cantidad_creditos <= 14) return 3;
    if (15 <= cantidad_creditos && cantidad_creditos <= 19) return 4;
    if (20 <= cantidad_creditos && cantidad_creditos <= 25) return 5;
    if (26 <= cantidad_creditos && cantidad_creditos <= 35) return 6;
    if (36 <= cantidad_creditos && cantidad_creditos <= 39) return 7;
    if (40 <= cantidad_creditos && cantidad_creditos <= 45) return 8;
    if (46 <= cantidad_creditos && cantidad_creditos <= 49) return 9;
    if (50 <= cantidad_creditos && cantidad_creditos <= 99) return 10;
    if (100 <= cantidad_creditos && cantidad_creditos <= 149) return 20;
    if (150 <= cantidad_creditos && cantidad_creditos <= 499) return 30;    
    if (500 <= cantidad_creditos && cantidad_creditos <= 999) return 50;
    // ... (resto del código)
    
    else {
        return 0; // En caso de que no entre en ningún rango, regresar 0
    }
}

function setInitialBalances() {
    // Jugador A
    let monedasA = document.querySelectorAll('.cargar_jugadorA + .divisas');
    let inputsA = document.querySelectorAll('.cargar_jugadorA');
    
    inputsA.forEach((input, index) => {
        let valor = parseFloat(input.value) || 0;
        let moneda = monedasA[index].value;

        if(valor !== 0) { // Si el valor no es 0 o vacío
            if(saldo_jugadorA[moneda]) {
                saldo_jugadorA[moneda] += valor;
            } else {
                saldo_jugadorA[moneda] = valor;
            }
        }
    });

    // Jugador B
    let monedasB = document.querySelectorAll('.cargar_jugadorB + .divisas');
    let inputsB = document.querySelectorAll('.cargar_jugadorB');
    
    inputsB.forEach((input, index) => {
        let valor = parseFloat(input.value) || 0;
        let moneda = monedasB[index].value;

        if(valor !== 0) { // Si el valor no es 0 o vacío
            if(saldo_jugadorB[moneda]) {
                saldo_jugadorB[moneda] += valor;
            } else {
                saldo_jugadorB[moneda] = valor;
            }
        }
    });

    displayResults(); // Esta función mostrará los saldos actualizados
}



// Al cargar la página, se recuperan los valores guardados
window.onload = function() {
    if (localStorage.getItem('usdtToEuro')) {
        document.getElementById('usdtToEuro').value = localStorage.getItem('usdtToEuro');
    }

    if (localStorage.getItem('euroToUsdt')) {
        document.getElementById('euroToUsdt').value = localStorage.getItem('euroToUsdt');
    }
    
};

// Función que guarda los valores en localStorage
function saveToLocalStorage() {
    localStorage.setItem('usdtToEuro', document.getElementById('usdtToEuro').value);
    localStorage.setItem('euroToUsdt', document.getElementById('euroToUsdt').value);
}

// Agrega un event listener a los campos input para guardar cambios
document.getElementById('usdtToEuro').addEventListener('change', saveToLocalStorage);
document.getElementById('euroToUsdt').addEventListener('change', saveToLocalStorage);

document.addEventListener("DOMContentLoaded", loadGameHistory);

function declareWinner(ganador) {
    let apuestaA = parseFloat(document.getElementById("apuestaA").value);

    if (isNaN(apuestaA) || apuestaA === 0) {
        alert("Por favor, ingrese una cantidad de apuesta para el jugador A.");
        return;  // Salir de la función si no hay valor válido en apuestaA
    }

    let monedaA = document.getElementById("monedaA").value;
    let monedaB = document.getElementById("monedaB").value;
    let apuestaB = convertCurrency(apuestaA, monedaA, monedaB);

    let saldoGanado, comision;
    if (ganador === "A") {
        comision = getCommission(apuestaA, monedaA);
        if (saldo_jugadorA[monedaA] != 0) {
            saldoGanado = apuestaA - comision; // Solo sumar la apuesta descontando la comisión
            
        } else {
            saldoGanado = apuestaA + apuestaA - comision; // Sumar doble de la apuesta descontando la comisión
        }
        saldo_jugadorA[monedaA] += saldoGanado;
        saldo_jugadorB[monedaB] -= apuestaB;

        updateGameHistory(ganador, saldoGanado, monedaA);  // Pasamos monedaA como tercer argumento

    } else {
        comision = getCommission(apuestaB, monedaB);
        if (saldo_jugadorB[monedaB] != 0) {
            saldoGanado = apuestaB - comision; // Solo sumar la apuesta descontando la comisión
        } else {
            saldoGanado = apuestaB + apuestaB - comision; // Sumar doble de la apuesta descontando la comisión
        }
        saldo_jugadorB[monedaB] += saldoGanado;
        saldo_jugadorA[monedaA] -= apuestaA;
        updateGameHistory(ganador, saldoGanado, monedaB);  // Pasamos monedaB como tercer argumento
    }

    displayResults();

}


document.getElementById("showHistorial").addEventListener('click', openPopup);
document.getElementById("reiniciarHistorial").addEventListener('click', function() {
    localStorage.removeItem('gameHistory');
    displayGameHistory();
});

document.getElementById('showHistorial').addEventListener('click', function() {
    openPopup();
    loadGameHistory();
});

function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function updateGameHistory(winner, amountWon, currencyWon) { // Agregamos un tercer parámetro: currencyWon
    const historyItem = {
        date: new Date().toLocaleString(),
        winner: winner,
        amountWon: amountWon,
        currency: currencyWon // Agregamos esta línea para almacenar la moneda en la que ganó
    };

    let gameHistory = JSON.parse(localStorage.getItem('gameHistory') || '[]');
    gameHistory.push(historyItem);
    localStorage.setItem('gameHistory', JSON.stringify(gameHistory));

    displayGameHistory();
}

function displayGameHistory() {
    let gameHistory = JSON.parse(localStorage.getItem('gameHistory') || '[]');
    let historyContainer = document.getElementById('historialPartidas');
    
    // Limpiar historial existente
    historyContainer.innerHTML = '';

    gameHistory.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `Fecha: ${item.date}, Ganador: Jugador ${item.winner}, Monto Ganado: ${item.amountWon} ${item.currency}`; // Modificamos para incluir item.currency
        historyContainer.appendChild(listItem);
    });
}


function loadGameHistory() {
    displayGameHistory();
}



document.getElementById('reiniciarHistorial').addEventListener('click', resetGameHistory);

function resetGameHistory() {
    // Limpiamos el historial de partidas en localStorage
    localStorage.removeItem('gameHistory');
    
    // Actualizamos la visualización en la página
    displayGameHistory();
}

function displayResults() {
    let fiarA = document.querySelector(".fiarA").checked; // Suponiendo que el checkbox para el jugador A tiene la clase 'fiarA'
    let fiarB = document.querySelector(".fiarB").checked; // Suponiendo que el checkbox para el jugador B tiene la clase 'fiarB'

    // Jugador A
    if (!fiarA && saldo_jugadorA['USDT'] < 0) {
        saldo_jugadorA['USDT'] = 0;
    }
    if (!fiarA && saldo_jugadorA['EURO'] < 0) {
        saldo_jugadorA['EURO'] = 0;
    }
    if (!fiarA && saldo_jugadorA['CREDITOS'] < 0) {
        saldo_jugadorA['CREDITOS'] = 0;
    }

    // Jugador B
    if (!fiarB && saldo_jugadorB['USDT'] < 0) {
        saldo_jugadorB['USDT'] = 0;
    }
    if (!fiarB && saldo_jugadorB['EURO'] < 0) {
        saldo_jugadorB['EURO'] = 0;
    }
    if (!fiarB && saldo_jugadorB['CREDITOS'] < 0) {
        saldo_jugadorB['CREDITOS'] = 0;
    }

    document.getElementById("saldoA-USDT").textContent = saldo_jugadorA['USDT'];
    document.getElementById("saldoA-EURO").textContent = saldo_jugadorA['EURO'];
    document.getElementById("saldoA-CREDITOS").textContent = saldo_jugadorA['CREDITOS'];

    document.getElementById("saldoB-USDT").textContent = saldo_jugadorB['USDT'];
    document.getElementById("saldoB-EURO").textContent = saldo_jugadorB['EURO'];
    document.getElementById("saldoB-CREDITOS").textContent = saldo_jugadorB['CREDITOS'];

    localStorage.setItem('saldo_jugadorA', JSON.stringify(saldo_jugadorA));
    localStorage.setItem('saldo_jugadorB', JSON.stringify(saldo_jugadorB));
}




// Al inicio, verificamos si hay saldos guardados en localStorage
if (localStorage.getItem('saldo_jugadorA')) {
    saldo_jugadorA = JSON.parse(localStorage.getItem('saldo_jugadorA'));
}

if (localStorage.getItem('saldo_jugadorB')) {
    saldo_jugadorB = JSON.parse(localStorage.getItem('saldo_jugadorB'));
}

// Luego, mostramos los saldos actuales (ya sea los predeterminados o los recuperados de localStorage)
displayResults();


// ... restante del archivo ...

const CURRENCIES = ['USDT', 'EURO', 'CREDITOS'];

function getBalanceString(saldo, jugadorName) {
    return CURRENCIES.map(currency => {
        if (saldo[currency] !== 0) {
            return `${jugadorName}: ${saldo[currency]}\n ${currency} `;
        }
        return '';
    }).join('');
}

function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    showToast();
}

function copyBalancesToClipboard() {
    let saldosString = getBalanceString(saldo_jugadorA, "Jugador A") + getBalanceString(saldo_jugadorB, "Jugador B");
    copyToClipboard(saldosString);
}

function copyBalancesJugadorA() {
    let saldosString = getBalanceString(saldo_jugadorA, "Jugador A");
    copyToClipboard(saldosString);
}

function copyBalancesJugadorB() {
    let saldosString = getBalanceString(saldo_jugadorB, "Jugador B");
    copyToClipboard(saldosString);
}


function showToast() {
    let toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000); // Después de 3 segundos, el toast se ocultará automáticamente.
}

// ... restante del archivo ...


function resetSaldoA() {
    saldo_jugadorA = {"USDT": 0, "EURO": 0, "CREDITOS": 0};
    displayResults();
}

function resetSaldoB() {
    saldo_jugadorB = {"USDT": 0, "EURO": 0, "CREDITOS": 0};
    displayResults();
}

function resetAll() {
    saldo_jugadorA = {"USDT": 0, "EURO": 0, "CREDITOS": 0};
    saldo_jugadorB = {"USDT": 0, "EURO": 0, "CREDITOS": 0};
    document.getElementById("apuestaBOutput").textContent = '';
    displayResults();
}

$(document).ready(function() {
    function formatState (state) {
        if (!state.id) { return state.text; }
        var imgUrl = $(state.element).data('thumbnail');
        var $state = $(
            '<span><img src="' + imgUrl + '" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };

    function formatStateSelection (state) {
        if (!state.id) { return state.text; }
        var imgUrl = $(state.element).data('thumbnail');
        return $('<span><img src="' + imgUrl + '" class="img-flag" /> ' + state.text + '</span>');
    }

    $(".divisas").select2({
        templateResult: formatState,
        templateSelection: formatStateSelection
    });
});
