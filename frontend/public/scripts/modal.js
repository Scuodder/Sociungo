// getting modal element 

let modal = document.getElementById('simpleModalX')
// open modal button

let modalBtn = document.getElementById('createAccn');

//get close button

let closeBtn = document.getElementsByClassName('closeBtn')[0] ;

let createAccountButton = document.getElementById('createAccount');
//click open
modalBtn.addEventListener('click', openModal )
//click close
closeBtn.addEventListener('click', closeModal)


//listen for outside click
window.addEventListener('click', outsideClick )

//function to open modal


function openModal () {
    modal.style.display = 'block';

}

//function to close modal
function closeModal () {
    modal.style.display = 'none'
}

function outsideClick(e) {
    if (e.target==modal){
        modal.style.display = 'none'
    }

}





