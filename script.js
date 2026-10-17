// Prazo da pizza: 20/11/2026, à meia-noite (horário de Brasília).
const dataFinal = new Date('2026-11-20T00:00:00-03:00').getTime();
const identificadores = ['dias', 'horas', 'minutos', 'segundos'];
const elementos = identificadores.map(identificador => document.getElementById(identificador));

function atualizarContagem() {
  const tempoRestante = Math.max(0, dataFinal - Date.now());
  const valores = [
    Math.floor(tempoRestante / 86400000),
    Math.floor(tempoRestante / 3600000) % 24,
    Math.floor(tempoRestante / 60000) % 60,
    Math.floor(tempoRestante / 1000) % 60
  ];

  valores.forEach((valor, indice) => {
    elementos[indice].textContent = String(valor).padStart(2, '0');
  });
}

atualizarContagem();
setInterval(atualizarContagem, 1000);
