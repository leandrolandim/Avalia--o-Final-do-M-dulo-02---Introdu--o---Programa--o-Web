const form2 = document.querySelector("#recadinhos") as HTMLFormElement;

const corpoTabela = document.querySelector("#tbody") as HTMLTableElement;

let logado2 = sessionStorage.getItem("logado");

let editar = false;
let indexEditar: any = undefined;
let user: any = undefined;

function checarLogado2() {
  if (!logado2) {
    window.location.href = "./index.html";
    return;
  }

  const dataUser = localStorage.getItem(logado2);
  if (dataUser) {
    user = JSON.parse(dataUser);
  }
}

function salvarRecado() {
  const mensagemForm = document.querySelector("#recadinhos") as HTMLFormElement;

  const descricao = mensagemForm.descricao.value;
  const detalhe = mensagemForm.detalhamento.value;

  const mensagem = {
    descricao,
    detalhe,
  };

  if (editar) {
    user.mensagens[indexEditar] = mensagem;

    editar = false;
  } else {
    user.mensagens.push(mensagem);
  }

  localStorage.setItem(user.username, JSON.stringify(user));
  preencherTabela();
  form2.reset();
  return;
}

function preencherTabela() {
  let mensagensHtml = "";
  const mensagens = user.mensagens;

  if (mensagens.length) {
    mensagens.forEach((mensagem: any, index: any) => {
      mensagensHtml += `
      <tr>
          <td>${index}</td>
          <td>${mensagem.descricao}</td>
          <td >${mensagem.detalhe}</td>
          <td><button type="submit" onclick="editarMensagem(${index})">Editar</button>
          <button type="submit" onclick="removerMensagem(${index})">Apagar</button></td>
      </tr>
      `;
    });
  }
  document.getElementById("tbody").innerHTML = mensagensHtml;
}

function removerMensagem(index: any) {
  user.mensagens.splice(index, 1);
  localStorage.setItem(user.username, JSON.stringify(user));
  preencherTabela();
}

function editarMensagem(index: number) {
  const formMensagens = document.getElementById("recadinhos");
  formMensagens.descricao.value = user.mensagens[index].descricao;
  formMensagens.detalhamento.value = user.mensagens[index].detalhe;

  editar = true;
  indexEditar = index;
}

function sair() {
  sessionStorage.clear();
  window.location.href = "./index.html";
}

checarLogado2();

document.addEventListener("DOMContentLoaded", preencherTabela);
