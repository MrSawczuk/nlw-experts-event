const perguntas = [
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro no console.",
        "Imprimir informações no console.",
        "Realizar operações matemáticas."
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "const = myVar 10;",
        "var myVar = 10;"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma biblioteca de gráficos.",
        "Um modelo de objeto para manipular documentos HTML.",
        "Uma linguagem de programação server-side."
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma função para criar objetos.",
        "Um formato de dados para intercâmbio de informações.",
        "Um método para manipulação de strings."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Não há diferença, ambos são usados para comparação.",
        "O '===' compara valores e tipos de dados, enquanto '==' compara apenas valores.",
        "O '==' compara valores e tipos de dados, enquanto '===' compara apenas valores."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      respostas: [
        "Concatenar strings.",
        "Realizar uma operação de OU lógico.",
        "Realizar uma operação de E lógico."
      ],
      correta: 2
    },
    {
      pergunta: "O que é o AJAX em JavaScript?",
      respostas: [
        "Uma biblioteca de gráficos.",
        "Um método para fazer requisições assíncronas.",
        "Uma função para animações."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do comando 'addEventListener' em JavaScript?",
      respostas: [
        "Inserir um novo elemento no DOM.",
        "Adicionar um ouvinte de eventos a um elemento HTML.",
        "Remover um elemento do DOM."
      ],
      correta: 1
    },
    {
      pergunta: "O que é o ECMAScript em JavaScript?",
      respostas: [
        "Uma biblioteca de animações.",
        "Uma especificação que define a linguagem JavaScript.",
        "Um editor de código fonte."
      ],
      correta: 1
    },
    {
      pergunta: "Como se faz um comentário de linha em JavaScript?",
      respostas: [
        "// Isso é um comentário",
        "<!-- Isso é um comentário -->",
        "/* Isso é um comentário */"
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