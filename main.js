const frases = [
  "A persistência é o caminho do êxito.",
  "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.",
  "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
  "Agir, eis a inteligência verdadeira. Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?",
  "Determinação, coragem e autoconfiança são fatores decisivos para o sucesso. Se estamos possuídos por uma inabalável determinação, conseguiremos superá-los. Independentemente das circunstâncias, devemos ser sempre humildes, recatados e despidos de orgulho.",
  "Só existe um êxito: a capacidade de levar a vida que se quer.",
];

const botao = document.getElementById('button-gerar-frase')
botao.addEventListener('click', function(){
  const frase = document.getElementById('frase-do-dia')

  const numero = Math.floor(Math.random() * frases.length);

  const fraseAleatoria = frases[numero]
  frase.textContent = fraseAleatoria
})
