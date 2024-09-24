let live = document.getElementById("live")

window.onscroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        live.style.display= "block";
    } 
}