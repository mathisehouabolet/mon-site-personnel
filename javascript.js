const toggle = document.querySelector(".toggle");
const menu = document.getElementById("navbar");
const icone = document.getElementById("icone");


function toggleMenu(){
    if ( menu.classList.contains("active")){
       
        menu.classList.remove("active");
        icone.classList.remove("fa-times");
        icone.classList.add("fa-bars");
    
    }else{
        menu.classList.add("active");
        icone.classList.remove("fa-bars");
        icone.classList.add("fa-times");
    
    }
    }

toggle.addEventListener("click", toggleMenu, false);