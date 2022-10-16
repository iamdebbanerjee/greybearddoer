
document.querySelector('.toggle-btn').addEventListener('click', nav_toggler);

const nav_toggle = document.querySelector('nav');
let nav_state = "off";

function nav_toggler(){
  
  if(nav_state === "off") {
    nav_toggle.style.display = 'block';
    nav_state = "on";
  }else if(nav_state === "on"){
    nav_toggle.style.display = 'none';
    nav_state = "off";
  }

}

