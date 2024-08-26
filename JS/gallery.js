document.getElementById("gallery-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const galeriaBtn = document.querySelector("#galeria-btn");
        const champsList = document.querySelector("#champs-list");
        const hideEl = document.querySelector("#hide-el");
        const deleteCard = document.getElementById("borrar-card");
        const title = document.getElementById("titulo").value;
        const alertaTitle = document.getElementById("alerta-title");
        const descripcion = document.getElementById("descripcion").value;
        const alertaDescription = document.getElementById("alerta-description");
        // Lo siguiente hace que la entrada de URL imagen siempre tenga valor: o lo pone el usuario, o toma por defecto el link que ponemos: 
        const image = document.getElementById("image-url").value || "https://as1.ftcdn.net/v2/jpg/05/41/88/58/1000_F_541885837_YpAx8fBSRTr5OYPpLH07w0jBcAKSM1lI.jpg";
        const tamañoImg = document.getElementById("tamaño-img").value || "270px";
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
        addToGallery.style.width = tamañoImg;
        addToGallery.style.backgroundColor = colorFondo;
        addToGallery.style.border= `2px solid ${colorBorde}`;

        // Maquetación de la imagen agregada:
        addToGallery.innerHTML = `
            <img src="${image}" alt="URL image" width="${tamañoImg}" height="60%" class="own-img">
            <div class="gallery-content">
                <h5>${title}</h5>
                <p>${descripcion}</p>
            </div>
        `;

        if (title === "") {
            alertaTitle.style.display = "inline-block";
            alertaTitle.textContent = `Es necesario incluir un título`;
            newPic.appendChild();
        }   else if (descripcion === "") {
            alertaDescription.style.display = "inline-block";
            alertaDescription.textContent = `Es necesario incluir una descripción`;
            newPic.appendChild();
        }   else {
            newPic.appendChild(addToGallery);
            alertaTitle.style.display = "none";
            alertaDescription.style.display = "none";
        } 

        //Agregar la imagen al contenedor
        newPic.appendChild(addToGallery);
     
        // Limpiar formulario
        document.getElementById("gallery-form").reset();

    });

    function deleteCard() {
        const newPic = document.querySelector(".new-pics");
        newPic.lastChild.remove();
    }
