const guardar = document.getElementById('buttonText');

guardar.addEventListener('click', function () {
    let texto = document.getElementById('inputText').value;
    localStorage.setItem('parrafo', texto);
});