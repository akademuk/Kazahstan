let modalForm = document.querySelector('.modalForm'); 
let modalFormContent = document.querySelector('.modalFormContent2'); 
let modalFormContentOpen = document.querySelectorAll('.modalFormContent-open');
let modalFormContentClose = document.querySelector('.close-popup2'); 
let body1 = document.querySelector('.body'); 

let popupScrollForm = document.querySelector('.popupScrollForm'); 
let popupScroll2Form = document.querySelector('.popupScroll2Form'); 

modalFormContentOpen.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        modalForm.classList.add('active'); 
        modalFormContent.classList.add('active');
        body1.classList.add('active');
    })
});
modalFormContentClose.addEventListener('click',() => { 
    modalForm.classList.remove('active'); 
    modalFormContent.classList.remove('active'); 
    body1.classList.remove('active');

    popupScrollForm.classList.remove('active');
    popupScroll2Form.classList.remove('active');
});