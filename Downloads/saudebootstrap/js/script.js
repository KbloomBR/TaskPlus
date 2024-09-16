document.getElementById('health-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const exerciseInput = document.getElementById('exercise').value;
  const mealInput = document.getElementById('meal').value;
  const sleepInput = document.getElementById('sleep').value;

  const exercise = parseInt(exerciseInput);
  const meal = parseInt(mealInput);
  const sleep = parseInt(sleepInput);

  if (isNaN(exercise) || exercise <= 0 || isNaN(meal) || meal <= 0 || isNaN(sleep) || sleep <= 0) {
    document.getElementById('error-message').innerText = 'Por favor, insira valores válidos em todas as atividades.';
    return;
  } else {
    document.getElementById('error-message').innerText = '';
  }

  const report = document.getElementById('report');
  report.innerHTML = `
    <p>Exercício: ${exercise} minutos</p>
    <p>Refeição: ${meal} calorias</p>
    <p>Sono: ${sleep} horas</p>
  `;

  syncData({ exercise, meal, sleep });
});

document.getElementById('calculate-results').addEventListener('click', function () {
  const report = document.getElementById('report').innerText;

  const exercise = parseInt(report.match(/Exercício: (\d+)/)[1]);
  const meal = parseInt(report.match(/Refeição: (\d+)/)[1]);
  const sleep = parseInt(report.match(/Sono: (\d+)/)[1]);

  let messages = [];

  if (exercise < 45) {
    messages.push("Você precisa de mais exercício!");
  }
  if (meal < 1000) {
    messages.push("Você precisa consumir mais calorias!");
  }
  if (sleep < 6) {
    messages.push("Você precisa dormir mais!");
  }
  if (messages.length === 0) {
    messages.push("Parabéns! Seu equilíbrio de atividades está ótimo.");
  }

  document.getElementById('results-message').innerText = messages.join(' ');
});

async function syncData(data) {
  try {
    const response = await fetch('https://api.exemplo.com/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log('Sincronizado com sucesso:', result);
  } catch (error) {
    console.error('Erro ao sincronizar:', error);
  }
}
