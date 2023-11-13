const btnDarkMode = document.querySelector(".dark-mode-btn");

const woodLink = document.getElementById("wood");

woodLink.addEventListener('click',showAlert)


function showAlert(e){
    e.preventDefault();
   alert("Այս նախագիծը դեռ ընթացքի մեջ է... \n This project is still in progress...")
}


btnDarkMode.onclick = function(){
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    document.body.classList.toggle("dark");
}