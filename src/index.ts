const login = document.querySelector("#login") as HTMLFormElement;

function seleciona(selecionado: any) {
  return document.querySelector(selecionado);
}

const sessao = localStorage.getItem("sessao");
let logado = sessionStorage.getItem("logado");

//const qSelect = (select: any) => document.querySelector(select);
// function qSelect(select: any) {
//   return document.querySelector(select);
// }

//const criarConta = document.querySelector("#botao2");

checarLogado();

// function loginUsuario(e: Event) {
//   e.preventDefault();

function loginUsuario() {
  const form = seleciona("#login");

  const usuario = JSON.parse(localStorage.getItem(form.username.value));

  if (!usuario) {
    alert("Usuario ou senha não encontrados!");
    login.reset();
    return;
  }
  if (!(form.password.value === usuario.password)) {
    alert("Usuario ou senha não encontrados!");
    login.reset();
    return;
  }

  salvaSessao(form.username.value);
  window.location.href = "./recados.html";
  login.reset();
}

function salvaSessao(data: any) {
  sessionStorage.setItem("logado", data);
}

function checarLogado() {
  if (sessao) {
    sessionStorage.setItem("logado", sessao);
    logado = sessao;
  }
  if (logado) {
    salvaSessao(logado);
    window.location.href = "./recados.html";
  }
}

//login?.addEventListener("submit", loginUsuario);
