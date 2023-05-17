let modalForm = document.querySelector('.modalForm'); 
let modalFormContent = document.querySelector('.modalFormContent2'); 
let modalFormContentOpen = document.querySelectorAll('.modalFormContent-open');
let modalFormContentClose = document.querySelector('.close-popup2'); 
let body1 = document.querySelector('.body'); 

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
});