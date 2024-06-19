let narrativa = document.getElementById('narrativa');
let proximo = document.getElementById('proximo');
let questions = document.querySelectorAll('.question');
let currentQuestion = 0;
let answers = [];
let resultado = document.getElementById('resultado');

proximo.addEventListener('click', () => {
  narrativa.style.display = 'none';
  questions[currentQuestion].style.display = 'block';
});

questions.forEach((question, index) => {
  question.addEventListener('click', (e) => {
    if (e.target.type === 'radio') {
      answers.push(e.target.value);
      currentQuestion++;
      if (currentQuestion < questions.length) {
        question.style.display = 'none';
        questions[currentQuestion].style.display = 'block';
      } else {
        calculateResult();
      }
    }
  });
});

function calculateResult() {
  let positiveAnswers = answers.filter((answer) => answer === 'sim').length;
  let result;
  let imageSrc;
  questions.forEach((question) => {
    question.style.display = 'none'; 
  });
  if (positiveAnswers >= 1 && positiveAnswers <= 3 ) {
    result = 'Você terá o culpido julio para te ajudar ';
    imageSrc = 'img/julio.jpeg'; 
  } else if (positiveAnswers === 4) {
    result = 'Você terá culpido lucas para te ajudar';
    imageSrc = 'img/lucas.jpeg'; 
  } else {
    result = 'Você terá o culpido jonas para te ajudar';
    imageSrc = 'img/jonas.jpeg'; 
  }
  
  const imagemResultado = document.getElementById('imagem-resultado');
  imagemResultado.src = imageSrc;
  
  const mensagem = document.getElementById('mensagem');
  mensagem.textContent = `${result}!`;
  
  resultado.style.display = 'block';
}