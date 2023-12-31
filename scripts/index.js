let number_no = 0;

function yesClick() {

    window.location.href = "yes.html";

}

function noButtonHover() {
    let noButton = document.getElementById('noButton');

    if (number_no < 20) {
        if(number_no == 0) {
            let yesButton = document.getElementById('yesButton');
            yesButton.style.marginRight = '136px';
            noButton.style.position = "absolute";
        }
        let x = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
        let y = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
        number_no++;
    }
    else {
        
        alert("This is getting a little rude 😒\nLet me help you out.");
        noButton.style.opacity = 0;
        noButton.style.visibility = "hidden";
    }

}