document.addEventListener("DOMContentLoaded", () => {
    const galeriaBtn = document.querySelector("#galeria-btn");
    const champsList = document.querySelector("#champs-list");
    const hideEl = document.querySelector("#hide-el");

    galeriaBtn.addEventListener("click", () =>{
        galeriaBtn.style.display = "none";
        champsList.style.display = "block";
        hideEl.style.display = "inline-block";
    })

    hideEl.addEventListener("click", () => {
        galeriaBtn.style.display = "inline-block";
        champsList.style.display = "none";
        hideEl.style.display = "none";

    })

  });