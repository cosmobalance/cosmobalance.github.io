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

function convertCurrency(amount, fromCurrency, toCurrency) {
    let rate = getConversionRate(fromCurrency, toCurrency);
    return Math.round(amount * rate);
}



function calculateBets() {
    let apuestaA = parseFloat(document.getElementById("apuestaA").value);
    let monedaA = document.getElementById("monedaA").value;
    let monedaB = document.getElementById("monedaB").value;
    
    let apuestaB = convertCurrency(apuestaA, monedaA, monedaB);
    
    document.getElementById("apuestaBOutput").textContent = `La apuesta convertida del jugador B es: ${apuestaB} ${monedaB}`;
}

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
    let monedaA = document.querySelector('.jugadorA + .divisas').value;
    let saldoA = parseFloat(document.getElementById('saldo_jugadorA').value) || 0;
    saldo_jugadorA[monedaA] = saldoA;
    
    // Jugador B
    let monedaB = document.querySelector('.jugadorB + .divisas').value;
    let saldoB = parseFloat(document.getElementById('saldo_jugadorB').value) || 0;
    saldo_jugadorB[monedaB] = saldoB;

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



function declareWinner(ganador) {
    let apuestaA = parseFloat(document.getElementById("apuestaA").value);
    let monedaA = document.getElementById("monedaA").value;
    let monedaB = document.getElementById("monedaB").value;
    let apuestaB = convertCurrency(apuestaA, monedaA, monedaB);

    let saldoGanado, comision;
    if (ganador === "A") {
        comision = getCommission(apuestaA, monedaA);
        saldoGanado = apuestaA + apuestaA - comision;
        saldo_jugadorA[monedaA] += saldoGanado;
        saldo_jugadorB[monedaB] -= apuestaB;
    } else {
        comision = getCommission(apuestaB, monedaB);
        saldoGanado = apuestaB + apuestaB - comision;
        saldo_jugadorB[monedaB] += saldoGanado;
        saldo_jugadorA[monedaA] -= apuestaA;
    }

    displayResults();
}


function displayResults() {
    document.getElementById("saldoA-USDT").textContent = saldo_jugadorA['USDT'];
    document.getElementById("saldoA-EURO").textContent = saldo_jugadorA['EURO'];
    document.getElementById("saldoA-CREDITOS").textContent = saldo_jugadorA['CREDITOS'];

    document.getElementById("saldoB-USDT").textContent = saldo_jugadorB['USDT'];
    document.getElementById("saldoB-EURO").textContent = saldo_jugadorB['EURO'];
    document.getElementById("saldoB-CREDITOS").textContent = saldo_jugadorB['CREDITOS'];
}

// ... restante del archivo ...

function copyBalancesToClipboard() {
    let saldosString = "";

    // Jugador A
    if (saldo_jugadorA['USDT'] !== 0) {
        saldosString += `Jugador A - USDT: ${saldo_jugadorA['USDT']}\n`;
    }
    if (saldo_jugadorA['EURO'] !== 0) {
        saldosString += `Jugador A - EURO: ${saldo_jugadorA['EURO']}\n`;
    }
    if (saldo_jugadorA['CREDITOS'] !== 0) {
        saldosString += `Jugador A - CREDITOS: ${saldo_jugadorA['CREDITOS']}\n`;
    }

    // Jugador B
    if (saldo_jugadorB['USDT'] !== 0) {
        saldosString += `Jugador B - USDT: ${saldo_jugadorB['USDT']}\n`;
    }
    if (saldo_jugadorB['EURO'] !== 0) {
        saldosString += `Jugador B - EURO: ${saldo_jugadorB['EURO']}\n`;
    }
    if (saldo_jugadorB['CREDITOS'] !== 0) {
        saldosString += `SJugador B - CREDITOS: ${saldo_jugadorB['CREDITOS']}\n`;
    }

    let textArea = document.createElement("textarea");
    textArea.value = saldosString;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();

    showToast();
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
