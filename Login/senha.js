// Pegando os valores da página HTML
const passwordInput = document.getElementById("password");
const eyeSvg = document.getElementById("eyeSvg");

// Atribuindo a ação
function eyeClick() {
  let inputTypeIsPassword = passwordInput.type == "password";

  if (inputTypeIsPassword) {
    showPassword();
  } else {
    hidePassword();
  }
}

// Função mostrar senha
function showPassword() {
  passwordInput.setAttribute("type", "text");
  eyeSvg.setAttribute("src", "../closed.svg");
}

//Função esconder senha
function hidePassword() {
  passwordInput.setAttribute("type", "password");
  eyeSvg.setAttribute("src", "../open.svg");
}
