// Seleciona o botão pelo seu id
const botao = document.getElementById("botao");

// Seleciona o elemento H1 pelo seu id
const resultado = document.getElementById("resultado");

// Adiciona um listener para o evento "click" no botão
botao.addEventListener("click", () => {
  // Gera um número aleatório entre 1 e 6
  const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
  
  // Exibe o resultado na página
  resultado.textContent = `O número sorteado foi ${numeroAleatorio}!`;
});
