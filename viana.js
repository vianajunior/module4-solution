// NOTA! As etapas deste arquivo são basicamente idênticas às que você
// realizado no arquivo SpeakHello.js.

// ETAPA 6: agrupe todo o conteúdo do SpeakGoodBye.js dentro de um IIFE
// Ver aula 52, parte 2


// ETAPA 7: Crie um objeto chamado 'byeSpeaker' ao qual você se conectará
// o método "speak" e que você expõe ao contexto global
// Ver aula 52, parte 1
// var byeSpeaker =

// NÃO anexe a variável speakWord ao objeto 'byeSpeaker'.
var  speakWord  =  "Adeus" ;

// ETAPA 8: Reescreva a função 'speak' de forma que ela seja anexada ao
// objeto byeSpeaker em vez de ser uma função autônoma.
// Ver aula 52, parte 2
função  speak ( nome )  {
  console . log ( speakWord  +  ""  +  nome ) ;
}

// ETAPA 9: Exponha o objeto 'byeSpeaker' ao escopo global. Diga
// 'byeSpeaker' também no escopo global.
// xxxx.xxxx = byeSpeaker;