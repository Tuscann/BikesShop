
carousel();

function carousel() {
    let myIndex = 0;
    let x = document.getElementsByClassName("mySlides");
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }

    setTimeout(carousel, 4000);
}