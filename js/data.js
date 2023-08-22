document.addEventListener("DOMContentLoaded",function(){
    let data = localStorage.getItem("parrafo");
    let element = document.getElementById('data');
    element.innerHTML += `<p>${data}$</p>`
    });