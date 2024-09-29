document.addEventListener('DOMContentLoaded', function() {

    function gameClick() {
    }



    console.log(window.location)
    if (window.location.pathname === '/' || window.location.pathname === '/index.html'){
        // Code for index.html

    } else if (window.location.pathname === '/schedule.html') {
        // Code for schedule.html
    } else if (window.location.pathname === '/findGame.html')  {
        // Get Elements
        projectPopup = document.querySelector('.popUpGameHide');
        closeButton = document.querySelector('.closeButton');
        games = document.getElementsByClassName('game');

        //Add Listener Events

        closeButton.addEventListener('click', function(){
            projectPopup.classList.toggle('popUpGame');
        });
        Array.from(games).forEach(element => {
            console.log(element);
            element.addEventListener('click', function(){
                projectPopup.classList.toggle('popUpGame');
            });
        });

    }

});