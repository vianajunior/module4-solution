// ******************************* 
// COMECE AQUI SE DESEJA UM PONTO DE INÍCIO MAIS FÁCIL PARA ESTA ATRIBUIÇÃO
// *******************************
//
// Módulo 4 Instruções de atribuição.
//
// A ideia desta tarefa é usar uma matriz de nomes existente
// e, em seguida, envie Hello 'Name' ou Good Bye 'Name' para o console.
// O programa deve dizer "Olá" para qualquer nome, exceto nomes que começam com um "J"
// ou "j", caso contrário, o programa deve dizer "adeus". Então, a saída final
// no console deve ficar assim:
/ *
Hello Yaakov
Adeus John
Adeus Jen
Adeus Jason
Olá paul
Olá Frank
Olá Larry
Olá Paula
Olá Laura
Adeus Jim
ATENÇÃO!!! ATENÇÃO!!!
O código NÃO funciona atualmente! É SEU trabalho fazê-lo funcionar
conforme descrito nos requisitos e nas etapas para concluir esta
tarefa.
ATENÇÃO!!! ATENÇÃO!!!
* /

// ETAPA 1: (NADA A FAZER. JÁ FEITO POR VOCÊ)
// Envolve todo o conteúdo do script.js dentro de um IIFE
// Ver aula 52, parte 2
// (Observe, a etapa 2 será realizada no arquivo SpeakHello.js.)
( function  ( )  {

var  names  =  [ "Yaakov" ,  "John" ,  "Jen" ,  "Jason" ,  "Paul" ,  "Frank" ,  "Larry" ,  "Paula" ,  "Laura" ,  "Jim" ] ;

// ETAPA 10: (NADA A FAZER. JÁ FEITO POR VOCÊ)
// Faça um loop sobre a matriz de nomes e diga 'Olá' ou "Adeus"
// usando o método 'speak' ou o helloSpeaker's ou byeSpeaker's
// método 'speak'.
// Ver palestra 50, parte 1
para  ( var  i  =  0 ;  i  <  nomes . comprimento ;  i ++ )  {

  // ETAPA 11: (NADA A FAZER. JÁ FEITO POR VOCÊ)
  // Recupera a primeira letra do nome atual no loop.
  // Use a função 'charAt' do objeto string. Desde que estamos procurando
  // nomes que começam com maiúsculas ou minúsculas 'J' / 'j', chamam
  // método 'toLowerCase' do objeto string no resultado, para que possamos comparar
  // para minúsculas 'j' depois.
  // Procure esses métodos no site da Mozilla Developer Network, se necessário.
  var  firstLetter  =  nomes [ i ] . charAt ( 0 ) . toLowerCase ( ) ;

  // ETAPA 12: (NADA A FAZER. JÁ FEITO POR VOCÊ)
  // Compare o 'firstLetter' recuperado no PASSO 11 com letras minúsculas
  // 'j'. Se for o mesmo, chame o método 'speak' do byeSpeaker com o nome atual
  // no loop. Caso contrário, chame o método 'speak' do helloSpeaker com o atual
  // nome no loop.
  if  ( firstLetter  ===  'j' )  {
    byeSpeaker . falar ( nomes [ i ] ) ;
  }  mais  {
    helloSpeaker . falar ( nomes [ i ] ) ;
  }
}

} ) ( ) ;