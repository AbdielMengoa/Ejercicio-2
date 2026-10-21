let horasTe = 6;

document.getElementById('modoJuego').addEventListener('change', function () {
  const modo = this.value;
  const labelInput = document.getElementById('labelInput');
  const inputEntrada = document.getElementById('inputEntrada');

  if (modo === 'mantequilla') {
    labelInput.innerText = "Días de atraso del reloj (1-5):";
    inputEntrada.type = "number";
    inputEntrada.placeholder = "Ej. 2";
  } else {
    labelInput.innerText = "¿En qué se parece un cuervo a un escritorio?";
    inputEntrada.type = "text";
    inputEntrada.placeholder = "Escribe tu respuesta...";
  }
});

function procesarSombrerero() {
  const modo = document.getElementById('modoJuego').value;
  const valor = document.getElementById('inputEntrada').value.toLowerCase().trim();
  const textoSombrerero = document.getElementById('textoSombrerero');
  const relojDisplay = document.getElementById('relojHora');

  if (!valor) {
    textoSombrerero.innerText = "¡El Sombrerero exige que digas o introduzcas algo!";
    return;
  }

  if (modo === 'adivinanza') {
    if (valor.includes('poe') || valor.includes('edgar')) {
      textoSombrerero.innerText = "¡Sorprendente! Edgar Allan Poe escribió sobre ambos.";
    } else {
      textoSombrerero.innerText = "El Sombrerero sonríe y confiesa: '¡No tengo la menor idea!'";
    }
  } else {
    let diasAtraso = Number(valor);
    horasTe = (horasTe + diasAtraso) % 12 || 12;
    relojDisplay.innerText = (horasTe < 10 ? '0' : '') + horasTe + ":00 PM";
    textoSombrerero.innerText = "¡Atrasaste el reloj! La Liebre insiste: 'Era mantequilla de la mejor'.";
  }
}

document.getElementById('btnSombrerero').addEventListener('click', procesarSombrerero);