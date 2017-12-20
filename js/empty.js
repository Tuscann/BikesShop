
carousel();

function carousel() {
    let myIndex = 0;
    let x = document.getElementsByClassName("mySlides");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "initial";
    setTimeout(carousel, 4000);
}