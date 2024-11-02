const toggle = document.getElementById('nav_toggle'),
      nav = document.getElementById('nav_menu')

   
    // show menu 

    const showMenu = ()=>{
        if(toggle && nav){
            toggle.addEventListener("click", ()=>{
                nav.classList.toggle('show')
            })
        }
    }
    showMenu();

    // remove Menu
const removeMenu = ()=>{
    const navLink = document.querySelectorAll('.nav_link') 


    navLink.forEach(element => {
          element.addEventListener("click", ()=>{
              nav.classList.remove("show")
          })    
    });
}

removeMenu();