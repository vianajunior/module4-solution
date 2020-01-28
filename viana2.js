/ Etapa 2: agrupar todo o conteúdo do SpeakHello.js dentro de um IIFE
// Ver aula 52, parte 2


// ETAPA 3: Crie um objeto chamado 'helloSpeaker' ao qual você irá anexar
// o método "speak" e que você expõe ao contexto global
// Ver aula 52, parte 1
// var helloSpeaker =

// NÃO anexe a variável speakWord ao objeto 'helloSpeaker'.
var  speakWord  =  "Olá" ;

// ETAPA 4: Reescreva a função 'speak' de forma que ela seja anexada ao
// objeto helloSpeaker em vez de ser uma função autônoma.
// Ver aula 52, parte 2
função  speak ( nome )  {
  console . log ( speakWord  +  ""  +  nome ) ;
}

// ETAPA 5: Exponha o objeto 'helloSpeaker' ao escopo global. Diga
// 'helloSpeaker' no escopo global também.
// Ver aula 52, parte 2
// (Observe, a etapa 6 será realizada no arquivo SpeakGoodBye.js.)
// xxxx.xxxx = helloSpeaker;