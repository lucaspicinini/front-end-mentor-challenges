const button = document.querySelectorAll('.card__bottom--numbers')

function changeButton(){
    button.forEach(
        function(choice){
            if(choice.className == 'card__bottom--numbers') {
                choice.className = 'card__bottom--numbers-active'
            }
        }
    );
}


 









