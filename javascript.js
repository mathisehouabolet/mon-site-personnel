const toggle = document.querySelector(".toggle");
const menu = document.getElementById("navbar");
const icone = document.getElementById("icone");


function change(){
    if (menu.classList.contains("active")){
        
        menu.classList.add("active");
        icone.classList.remove("fa-bars");
        icone.classList.add("fa-times");
    
    }else{
        
        menu.classList.remove("active");
        icone.classList.remove("fa-times");
        icone.classList.add("fa-bars");

    }
    
}

toggle.addEventListener("click", toggleMenu);