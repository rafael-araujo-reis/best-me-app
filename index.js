const questions = [
  "O que aprendi hoje?",
  "O que me deixou chateado?",
  "O que eu poderia ter feito para melhorar",
  "O que me deixou feliz?",
  "Quantas pessoas eu ajudei hoje?",
];

const ask = (index = 0) => {
  process.stdout.write(`${questions[index]}\n`);
};

const answers = [];

ask();

process.stdin.on("data", data => {
  answers.push(data.toString().trim() + '\n');
  answers.length < questions.length ? ask(answers.length) : process.exit();
});

function printAnswers() {
  process.stdout.write(
    `******************************
  Essas foram suas respostas
  ******************************
  `);
  answers.forEach(element => {
    process.stdout.write(element);
  });
}

process.on('exit', () => printAnswers());