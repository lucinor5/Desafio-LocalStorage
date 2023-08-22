const guardar = document.getElementById('buttonText')
const texto = document.getElementById('inputText').value

localStorage.setItem('parrafo')

guardar.addEventListener('click', function() {
   const local = localStorage.getItem('parrafo')

   texto.innerHTML += local
})