const guardar = document.getElementById('buttonText');

guardar.addEventListener('click', function () {
    const texto = document.getElementById('inputText').value;
    localStorage.setItem('parrafo', texto);
});