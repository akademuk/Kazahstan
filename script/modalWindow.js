let popupBg = document.querySelector('.modalWindow'); 
let popup1 = document.querySelector('.modalWindowContent'); 
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup'); 
let body = document.querySelector('.body'); 

openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active'); 
        popup1.classList.add('active');
        body.classList.add('active');
    })
});
closePopupButton.addEventListener('click',() => { 
    popupBg.classList.remove('active'); 
    popup1.classList.remove('active'); 
    body.classList.remove('active');
});