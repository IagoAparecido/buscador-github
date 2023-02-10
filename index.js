const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const fundo = document.querySelector("#fundo");
const nomeDigitado = document.querySelector("#nomeDigitado")

btn.onclick = () => {

  let r = Math.floor(Math.random() * 255),
    g = Math.floor(Math.random() * 255),
    b = Math.floor(Math.random() * 255);
  fundo.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

btn2.onclick = async () => {
  var name = nomeDigitado.value

  if (name == "") return

  await fetch(`https://api.github.com/users/${name}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const seguidores = document.querySelector("#seguidores");
      seguidores.innerHTML = ` ${data.followers}`

      const seguindo = document.querySelector("#seguindo");
      seguindo.innerHTML = ` ${data.following}`

      const repo = document.querySelector("#repo");
      repo.innerHTML = ` ${data.public_repos}`

      const compania = document.querySelector("#compania");
      compania.innerHTML = ` ${data.company}`

      const local = document.querySelector("#local");
      local.innerHTML = ` ${data.location}`

      const nome = document.querySelector("#nome");
      nome.innerHTML = ` ${data.login}`

      const avatar = document.querySelector("#image_user");
      avatar.src = data.avatar_url
      avatar.style.display = "block"

    })


}