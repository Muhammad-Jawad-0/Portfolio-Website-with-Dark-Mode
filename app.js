let icon = document.getElementById("icon");

icon.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
    if(document.body.classList.contains("darkMode")){
        icon.src = "./assets/sun.png"
    }else{
        icon.src = "./assets/moon.png"
    }
})