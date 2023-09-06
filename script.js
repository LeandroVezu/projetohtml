function mudarTema() {
  const html = document.documentElement
html.classList.toggle('light')
// Pegar a imagem
const img = document.querySelector('#profile img')

// Substiruir a imagem
if (html.classList.contains('light')) {
  img.src = './assets/avatar-light.png'
  // Segunda forma de arterar qualquer coisa
  img.setAttribute('alt', "Foto de perfil-light")

// Substiruir a imagem sem light mode
} else {
  img.src = './assets/avatar.png'
}

}