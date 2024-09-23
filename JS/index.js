let live = document.getElementById("live")

window.onscroll = () => {
    if (window.scrollY > 350) {
        live.style.display= "block";
    } else {
        live.style.display= "none";
    }
}