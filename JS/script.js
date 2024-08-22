document.getElementById("gallery-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const galeriaBtn = document.querySelector("#galeria-btn");
        const champsList = document.querySelector("#champs-list");
        const hideEl = document.querySelector("#hide-el");
        const agregarCard = document.querySelector("#agregar-card");
        const title = document.getElementById("titulo").value;
        const descripcion = document.getElementById("descripcion").value;
        // Lo siguiente hace que la entrada de URL imagen siempre tenga valor: o lo pone el usuario, o toma por defecto el link que ponemos: 
        const image = document.getElementById("image-url").value || "https://i.pinimg.com/564x/a9/5b/24/a95b24c7979df6c4e167721d89d18fc8.jpg";
        const colorFondo = document.getElementById("color-fondo").value;
        const colorBorde = document.getElementById("color-borde").value;
        const newPic = document.querySelector(".new-pics");

        console.log({
            title: title,
            descripcion: descripcion,
            image: image,
            colorFondo: colorFondo,
            colorBorde: colorBorde,
        });

        galeriaBtn.addEventListener("click", () =>{
            galeriaBtn.style.display = "none";
            champsList.style.display = "block";
            hideEl.style.display = "inline-block";
        });

        hideEl.addEventListener("click", () => {
            galeriaBtn.style.display = "inline-block";
            champsList.style.display = "none";
            hideEl.style.display = "none";
        });

        // Crear nuevas cards 
        const addToGallery = document.createElement("div");
        addToGallery.className = "image";
        addToGallery.style.backgroundColor = colorFondo;
        addToGallery.style.borderColor= colorBorde;

        // Maquetación de la imagen agregada:
        addToGallery.innerHTML = `
            <img src="${image}" alt="URL image">
            <div class="gallery-content">
                <p>${title}</p>
                <p>${descripcion}</p>
            </div>
        `;

        //Agregar la imagen al contenedor
        newPic.appendChild(addToGallery);
           
        // Limpiar formulario
        document.getElementById("gallery-form").reset()
    });
