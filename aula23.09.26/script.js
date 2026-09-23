var dicas = [
  'Aposte em uma peça de destaque e deixe o resto neutro.',
  'Jeans reto + camisa branca: combinação que nunca falha.',
  'Um bom acessório transforma um look básico.',
  'Misture texturas: linho, couro e malha combinam bem.',
  'Vista o que te deixa confiante, essa é a melhor tendência.',
  'Um blazer transforma qualquer look em algo mais elegante.',
  'Invista em básicos de qualidade: branco, preto, bege e jeans.',
  'Ajuste as peças ao seu corpo: um bom caimento vale mais que a marca.',
  'Combine o cinto com a cor dos sapatos.',
  'Use no máximo três cores por look para manter a harmonia.',
  'Tênis branco combina com quase tudo.',
  'Camadas dão profundidade: camiseta, camisa aberta e jaqueta.',
  'Estampas diferentes funcionam se tiverem uma cor em comum.',
  'Lave as roupas do avesso para preservar cor e tecido.',
  'Óculos de sol e um bom relógio completam o visual.',
  'Monocromático alonga a silhueta e sempre parece sofisticado.',
  'Antes de sair, tire uma peça ou acessório: menos costuma ser mais.',
  'Cuide dos sapatos: limpos e engraxados mudam o look inteiro.',
  'Teste combinações no espelho antes de comprar algo novo.',
  'Guarde looks que você amou em fotos para repetir depois.',
  'Um lenço colorido dá vida a um look todo neutro.',
  'Vermelho chama atenção: use em uma peça só.',
  'Tons de azul-marinho e cinza são mais versáteis que o preto puro.',
  'Bolsa e sapato não precisam ser iguais, só combinar em tom.',
  'Regata, short de alfaiataria e sandália: look de verão pronto.',
  'Um casaco oversized deixa qualquer roupa mais moderna.',
  'Cores vivas ficam ótimas junto com jeans.',
  'Brincos grandes pedem cabelo preso e decote mais discreto.',
  'Para fotos, prefira tecidos que não amassem fácil.',
  'Roupa passada muda tudo: vapor rápido já resolve.',
  'Tricô e cores terrosas são perfeitos para o outono.',
  'Vestido midi com tênis: elegante e confortável.',
  'Aposte em uma peça vintage para ter um look único.',
  'Conheça seu tom de pele para escolher as cores que mais valorizam.',
  'Bermuda jeans, camisa de linho e chinelo bom: praia com estilo.',
  'Não siga toda tendência, escolha só as que combinam com você.',
  'Um bom sutiã e uma boa meia fazem diferença invisível e enorme.',
  'Cores neon são ótimas em pequenos detalhes, como tênis ou bolsa.',
  'Para viajar, monte looks que combinem entre si e leve menos peças.',
  'Estilo é repetir o que te faz bem, com um toque novo a cada dia.'
];
var ultima = -1;
document.getElementById('botao').addEventListener('click', function () {
  var i;
  do { i = Math.floor(Math.random() * dicas.length); } while (i === ultima);
  ultima = i;
  document.getElementById('dica').textContent = dicas[i];
});
document.getElementById('ano').textContent = new Date().getFullYear();