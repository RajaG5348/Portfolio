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

// open webpage

const openUrl = ()=>{
    const openUrl = document.getElementById('openUrl')
    openUrl.addEventListener('click',()=>{
        window.open('https://rajag5348.github.io/Food-delivery-webpage/')
    } )
}
openUrl()