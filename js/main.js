const faq1 = document.querySelector('#faq1')
const faq2 = document.querySelector('#faq2')
const faq3 = document.querySelector('#faq3')
const faq4 = document.querySelector('#faq4')

document.querySelector('#faq-cont-1').addEventListener('click', showhide);
document.querySelector('#faq-cont-2').addEventListener('click', showhide2);
document.querySelector('#faq-cont-3').addEventListener('click', showhide3);
document.querySelector('#faq-cont-4').addEventListener('click', showhide4);

function showhide(){
    faq1.classList.toggle('hidden')
    faq2.classList.add('hidden')
    faq3.classList.add('hidden')
    faq4.classList.add('hidden')
}

function showhide2(){
    faq2.classList.toggle('hidden')
    faq3.classList.add('hidden')
    faq4.classList.add('hidden')
    faq1.classList.add('hidden')
}

function showhide3(){
    faq3.classList.toggle('hidden')
    faq4.classList.add('hidden')
    faq1.classList.add('hidden')
    faq2.classList.add('hidden')
}

function showhide4(){
    faq4.classList.toggle('hidden')
    faq1.classList.add('hidden')
    faq2.classList.add('hidden')
    faq3.classList.add('hidden')
}