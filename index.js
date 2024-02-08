const perguntas = [
  {
    pergunta: "Qual é o agente em Valorant que tem a habilidade 'Fumaça Celestial'?",
    respostas: [
      "Phoenix",
      "Omen",
      "Viper"
    ],
    correta: 1
  },
  {
    pergunta: "Qual arma em Valorant possui a taxa de disparo mais alta?",
    respostas: [
      "Vandal",
      "Phantom",
      "Spectre"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do mapa em Valorant onde ocorre a missão 'Ascent'?",
    respostas: [
      "Bind",
      "Haven",
      "Split"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a nacionalidade de Sage em Valorant?",
    respostas: [
      "Coreana",
      "Chinesa",
      "Japonesa"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a habilidade suprema de Jett em Valorant?",
    respostas: [
      "Tempestade Crescente",
      "Eclipse",
      "Colisão"
    ],
    correta: 0
  },
  {
    pergunta: "Qual agente em Valorant pode reviver companheiros de equipe com sua habilidade suprema?",
    respostas: [
      "Sage",
      "Phoenix",
      "Cypher"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do robô de Sentinel em Valorant?",
    respostas: [
      "Killjoy",
      "Cypher",
      "Sova"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o número máximo de rodadas em um jogo competitivo de Valorant?",
    respostas: [
      "22",
      "25",
      "30"
    ],
    correta: 2
  },
  {
    pergunta: "Qual agente em Valorant possui habilidades relacionadas a fios e armadilhas?",
    respostas: [
      "Cypher",
      "Brimstone",
      "Sova"
    ],
    correta: 0
  },
  {
    pergunta: "Em Valorant, qual é a arma secundária padrão?",
    respostas: [
      "Classic",
      "Shorty",
      "Frenzy"
    ],
    correta: 0
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for(const item of perguntas) {
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  quizItem.querySelector('dl').appendChild(dt)
}

quizItem.querySelector('dl dt').remove()

//coloca a pergunta na tela
quiz.appendChild(quizItem)
}