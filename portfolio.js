const hamburgervalue = document.querySelector(".hamburger");
const navlistvalue = document.querySelector(".navlist");
const buttonvalue = document.querySelector(".right");


hamburgervalue.addEventListener("click",() =>{
    if(navlistvalue.classList.contains("navlist")){
        navlistvalue.classList.remove("navlist");
        // navlistvalue.style.marginTop= "40px";
        navlistvalue.classList.add("demo");

        buttonvalue.classList.contains("right");
        buttonvalue.classList.remove("right");
    }
    else{
        navlistvalue.classList.add("navlist");
        buttonvalue.classList.add("right");
    }
});