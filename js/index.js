const guardar = document.getElementById('buttonText')
const texto = document.getElementById('inputText').value
const data = document.getElementById('data')

localStorage.setItem('parrafo')

guardar.addEventListener('click', function() {
   const local = localStorage.getItem('parrafo')

   data.innerHTML += parrafo
})