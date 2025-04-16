document.addEventListener('DOMContentLoaded', () => {
    eventListener();

    darkMode();
})

//funcion
function eventListener(){
    const selectMenu = document.querySelector('.menu-movil');
    
    selectMenu.addEventListener('click', mostrarMenu);
}

function mostrarMenu(){
   const navegacion = document.querySelector('.nav-none');

   if(navegacion.classList.contains('mostrar-navegacion')){
        navegacion.classList.remove('mostrar-navegacion');
   }else{
        navegacion.classList.add('mostrar-navegacion');
   }
  
}

//btn mode dark
function darkMode(){
    const btnDark = document.querySelector('.dark-mode');

    btnDark.addEventListener('click', modeDark)
}

function modeDark(){
    document.body.classList.toggle('mode-dark')
}

