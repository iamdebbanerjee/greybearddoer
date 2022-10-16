
document.querySelector('.toggle-btn').addEventListener('click', nav_toggler);

const nav_toggle = document.querySelector('nav');
let nav_state = "off";

function nav_toggler(){
  
    if(nav_state === "off") {
    nav_toggle.style.height = '50vh';
    nav_toggle.style.visibility = 'visible';
    nav_state = "on";
    }else if(nav_state === "on"){
    nav_toggle.style.height = '0';
    nav_toggle.style.visibility = 'hidden';
    nav_state = "off";
    }

}

