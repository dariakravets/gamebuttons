const button = document.getElementById('win');
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});

const button1 = document.getElementById('lose');
button1.addEventListener('click', function (){
    $("#game").fadeOut(1);
    $("#game-message").addClass('animated bounceInDown').css('animation-delay', '1s').show();
})