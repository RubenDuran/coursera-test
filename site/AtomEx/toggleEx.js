var button = document.querySelector("button");
//var isPurple = false;

//without using toggle feature
//button.addEventListener('click', function() {
//    if (isPurple) {
//        document.body.style.background = "white";
//    } else {
//    }
//    isPurple = !isPurple;
//});//


//with improved toggle option
button.addEventListener('click', function() {
    document.body.classList.toggle("purple");
});
