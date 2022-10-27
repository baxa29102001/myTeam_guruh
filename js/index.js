const navbar_mobile = document.querySelector(".navbar_mobile")

const burger_btn = document.querySelector(".burger")

const close_btn = document.querySelector(".close")

burger_btn.addEventListener("click", toggleNav)
function toggleNav() {
    if (navbar_mobile.classList.contains("active")) {
        navbar_mobile.classList.remove('active')
    }else{
        console.log("it is working");
        navbar_mobile.classList.add('active');
    }
    
 }


 close_btn.addEventListener("click", toggleNav)

