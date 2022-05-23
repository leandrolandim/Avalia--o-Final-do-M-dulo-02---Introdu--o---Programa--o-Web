//const form = document.querySelector("#cadastro") as HTMLFormElement;

function seleciona(selecionado: any) {
  return document.querySelector(selecionado);
}

function salvarUsuario() {
  const form = seleciona("#cadastro");

  // const nomeUsuario = form.username.value;
  // const senha = form.password.value;
  // const senha2 = form.password2.value;

  const usuarios = JSON.parse(localStorage.getItem(form.username.value));

  console.log(usuarios);
  //for (const usuario of usuarios) {
  //console.log(usuario);
  // if (usuarios === form.username.value) {
  if (usuarios) {
    alert("Usuario já cadastrados");
    form.reset();
    return;
  }
  // }

  if (form.password.value === form.password2.value) {
    localStorage.setItem(
      form.username.value,
      JSON.stringify({
        username: form.username.value,
        password: form.password.value,
        mensagens: [],
      })
    );

    // usuarios.push({
    //   username,
    //   password,
    //   mensagens: [],
    // });
    alert("Usuario Cadastrado com sucesso");
    location.href = "./index.html";
    return;
  } else {
    alert("As senhas não são iguais");
  }
  // localStorage.setItem(form.username.value, JSON.stringify(usuarios));
  //localStorage.setItem(username, JSON.stringify([]));

  form.reset();
  //location.href = "./index.html";
}

//form?.addEventListener("submit", salvarUsuario);
