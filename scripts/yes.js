
window.onload = function() {
    
    setTimeout(function() {
        let p1 = document.getElementById('p1');
        p1.style.opacity = 1;
    }, 1000);
    setTimeout(function() {
        let p2 = document.getElementById('p2');
        p2.style.opacity = 1;
    }, 3000);
    setTimeout(function() {
        let prove = document.getElementById('prove');
        prove.style.opacity = 1;
    }, 5000);

}

function showQuiz() {
    document.getElementById('overlay').style.opacity = 1;
    document.getElementById('overlay').style.zIndex = 2;
}