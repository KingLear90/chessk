document.getElementById("gallery-form").addEventListener("submit", function (event) {
        event.preventDefault();

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

        // Alternativa entre agregar la imagen correctamente o mostrar mensaje de error si falta título, descripción o ambos:
        if (title === "") {
            alertaTitle.style.display = "inline-block";
            newPic.appendChild();   // Como no hay título, no habrá imagen agregada.
        }   else if (descripcion === "") {
            alertaDescription.style.display = "inline-block";
            newPic.appendChild();   // Como no hay descripción, no habrá imagen.
        }   else {
            newPic.appendChild(addToGallery);       // Hay imagen y descripción, entonces se agrega foto. 
            alertaTitle.style.display = "none";
            alertaDescription.style.display = "none";
        } 

        //Agregar la imagen al contenedor
        newPic.appendChild(addToGallery);
     
        // Limpiar formulario
        document.getElementById("gallery-form").reset();

    });

    // Botón que cumple la función de ir eliminando las imágenes agregadas (o la única, si hay solo una): 
    function deleteCard() {
        const newPic = document.querySelector(".new-pics");
        newPic.lastChild.remove();
    }

    // Constante y función para mostrar o esconder listado de campeones mundiales:     
    const champsList = document.querySelector("#champs-list");
    let ownGallery = document.querySelector("#own-gallery");
    window.onscroll = () => {
        if (window.scrollY > 580) {
            champsList.style.display = "block";
            if (window.scrollY > 1282) {
            ownGallery.style.display = "block";
            }
            else {
                ownGallery.style.display = "none";
            }
        }
        else {
            champsList.style.display = "none";
        }
        
    }

