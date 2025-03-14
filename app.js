'use strict' 

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('Darkmode');

    var className = document.body.className;
    if(className == "Darkmode"){
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: '+ className )
});