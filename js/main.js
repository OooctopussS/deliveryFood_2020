const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
cartButton.addEventListener('click', function(evnet){
modal.classList.add('modal-active');
});

close.addEventListener('click', function (evnet) {
    modal.classList.remove('modal-active');
})


