
window.onload = function () {
    mainFun() ;
}

function mainFun () {


    const M_manu = document.getElementById('m-manu') ;
    
    const bar_icon = document.getElementById('bar-icn')
    const close_icon = document.getElementById('close-mamu');





    // ----------- event area _----------- \\

    // M_manu.addEventListener('animationend' , function() {



    // })

    bar_icon.addEventListener('click' , function () {
        M_manu.classList.add('ul-in');
        M_manu.classList.remove('ul-out');
        bar_icon.style.display = 'none'
        close_icon.style.display = 'block'

 
    })

    close_icon.addEventListener('click' , function () {
        M_manu.classList.add('ul-out');
        M_manu.classList.remove('ul-in');

        this.style.display = 'none'
        bar_icon.style.display = 'block'
    })
    
    
    
    
}


