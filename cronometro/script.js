let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;
let rodando = false;

function atualizarDisplay() {
  let h = horas < 10 ? "0" + horas : horas;
  let m = minutos < 10 ? "0" + minutos : minutos;
  let s = segundos < 10 ? "0" + segundos : segundos;
  document.getElementById("display").textContent = `${h}:${m}:${s}`;
}

function iniciar() {
  if (!rodando) {
    intervalo = setInterval(() => {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }
      if (minutos === 60) {
        minutos = 0;
        horas++;
      }
      atualizarDisplay();
    }, 1000);
    rodando = true;
  }
}

function pausar() {
  clearInterval(intervalo);
  rodando = false;
}

function resetar() {
  clearInterval(intervalo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  atualizarDisplay();
  rodando = false;
}
