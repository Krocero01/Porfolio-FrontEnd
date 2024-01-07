let contadorAcerca = 2;
let contadorProy = 2;
let contadorEX = 2;

/*--cuadro logueo--*/

var btnAbrirPopup = document.getElementById('logeo'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popup'),
btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
overlay.classList.add('active');
popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
e.preventDefault();
overlay.classList.remove('active');
popup.classList.remove('active');
});

/*funciones banner , foto personal y mas*/

function cambiar_parrafo_PRES(){//nombre
    let valor= prompt("Escriba nuevo nombre","");
    document.getElementById("nombre").innerText=valor;
}

function cambiar_parrafo_PRES2(){//titulo
    let valor= prompt("Escriba nuevo texto","");
    document.getElementById("titulo").innerText=valor;
}

function cambiar_PRES() {//foto personal
    const inputPhoto = document.getElementById("input-photo");
    const displayedPhoto = document.getElementById("displayed-photo");
    inputPhoto.addEventListener("change", function (event) {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                displayedPhoto.src = e.target.result;
            };
            reader.readAsDataURL(selectedFile);
        }
    });
    inputPhoto.click();
}

function cambiar_banner() {//banner
    const inputBanner = document.getElementById("input-banner");
    const displayedBanner = document.getElementById("displayed-banner");
    inputBanner.addEventListener("change", function (event) {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                displayedBanner.src = e.target.result;
            };
            reader.readAsDataURL(selectedFile);
        }
    });
    inputBanner.click();
}

/*funciones acerca*/

function agregar_acerca() {//texto acerca
    const divAcercade = document.getElementById("div-acercade");
    const nuevoContenido = prompt("Ingrese el nuevo contenido:");
    if (nuevoContenido) {        
        const nuevoDiv = document.createElement("div");
        nuevoDiv.className = "acercade-" + contadorAcerca;

        const nuevoParrafo = document.createElement("a");
        nuevoParrafo.id = "contenidoAD-"+ contadorAcerca;
        nuevoParrafo.textContent = nuevoContenido;

        const btnEliminar = document.createElement("div");
        btnEliminar.id = "elim_parrafo_AD";
        btnEliminar.className = "btn-edit-sec";
        btnEliminar.innerHTML = '<a href="#" class="btn-right" aria-label="edit"><i class="fas fa-trash-alt"></i></a>';
        btnEliminar.addEventListener("click", function() {
            divAcercade.removeChild(nuevoDiv);
        });

        const btnEditar = document.createElement("div");
        btnEditar.id = "camb_parrafo_AD";
        btnEditar.className = "btn-edit-sec";
        btnEditar.innerHTML = '<a href="#" class="btn-right" aria-label="edit"><i class="fa fa-pen"></i></a>';
        btnEditar.addEventListener("click", function() {
            const nuevoContenidom = prompt("Ingrese el nuevo contenido:");
            nuevoParrafo.textContent = nuevoContenidom;
        });

        nuevoDiv.appendChild(nuevoParrafo);
        nuevoDiv.appendChild(btnEliminar);
        nuevoDiv.appendChild(btnEditar);
        nuevoDiv.appendChild(document.createElement("br")); 
        nuevoDiv.appendChild(document.createElement("br")); 

        
        divAcercade.appendChild(nuevoDiv);

        contadorAcerca++;
    
    }
}

function eliminar_contenido_AD() {//elimina el primer contenio 
    const divAcercade = document.getElementById("div-acercade");
    const primerAcercade = divAcercade.querySelector(".acercade-1");
    if (primerAcercade) {
        divAcercade.removeChild(primerAcercade);
    }
}

function cambiar_parrafo_AD() {//cambia el primer contenio 
    const nuevoContenidom = prompt("Ingrese el nuevo contenido:");
    document.getElementById("contenidoAD-1").innerText = nuevoContenidom;
}

/*funciones experiencia*/

function agregar_exp() {//texto experiencia
    const divexp = document.getElementById("div-experiencia");
    const nuevoContenido = prompt("Ingrese el nuevo contenido:");

    if (nuevoContenido) {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.className = "experiencia-" + contadorEX;

        const nuevoParrafo = document.createElement("a");
        nuevoParrafo.id = "contenidoEX-" + contadorEX;
        nuevoParrafo.textContent = nuevoContenido;

        const btnEliminar = document.createElement("div");
        btnEliminar.id = "elim_parrafo_EX";
        btnEliminar.className = "btn-edit-sec";
        btnEliminar.innerHTML = '<a href="#" class="btn-right" aria-label="edit"><i class="fas fa-trash-alt"></i></a>';
        btnEliminar.addEventListener("click", function() {
            divexp.removeChild(nuevoDiv);
        });

        const btnEditar = document.createElement("div");
        btnEditar.id = "camb_parrafo_EX";
        btnEditar.className = "btn-edit-sec";
        btnEditar.innerHTML = '<a href="#" class="btn-right" aria-label="edit"><i class="fa fa-pen"></i></a>';
        btnEditar.addEventListener("click", function() {
            const nuevoContenidom = prompt("Ingrese el nuevo contenido:");
            nuevoParrafo.textContent = nuevoContenidom;
        });

        nuevoDiv.appendChild(nuevoParrafo);
        nuevoDiv.appendChild(btnEliminar);
        nuevoDiv.appendChild(btnEditar);
        nuevoDiv.appendChild(document.createElement("br")); 
        nuevoDiv.appendChild(document.createElement("br")); 

        divexp.appendChild(nuevoDiv);

        contadorEX++;
    }
}

function eliminar_contenido_EX() {//elimina el primer contenio 
    const divexp = document.getElementById("div-experiencia");
    const primerExp = divexp.querySelector(".experiencia-1");
    if (primerExp) {
        divexp.removeChild(primerExp);
    }
}

function cambiar_parrafo_EX() {//cambia el primer contenio 
    const nuevoContenidom = prompt("Ingrese el nuevo contenido:");
    document.getElementById("contenidoEX-1").innerText = nuevoContenidom;
}

/*funciones proyectos*/

function agregar_proy() {//texto proyecto
    const divProy = document.getElementById("div-proyectos");
    const nuevoContenido = prompt("Ingrese el nuevo contenido:");

    if (nuevoContenido) {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.className = "proyectos-" + contadorProy;

        const nuevoParrafo = document.createElement("a");
        nuevoParrafo.id = "contenidoProy-1"+ contadorProy;
        nuevoParrafo.textContent = nuevoContenido;

        const btnEliminar = document.createElement("div");
        btnEliminar.id = "elim_parrafo_proy";
        btnEliminar.className = "btn-edit-sec";
        btnEliminar.innerHTML = '<a href="#" class="btn-right" aria-label="edit"><i class="fas fa-trash-alt"></i></a>';
        btnEliminar.addEventListener("click", function() {
            divProy.removeChild(nuevoDiv);
        });

        const btnEditar = document.createElement("div");
        btnEditar.id = "camb_parrafo_proy";
        btnEditar.className = "btn-edit-sec";
        btnEditar.innerHTML = '<a href="#" class="btn-right" aria-label="edit"><i class="fa fa-pen"></i></a>';
        btnEditar.addEventListener("click", function() {
            const nuevoContenidom = prompt("Ingrese el nuevo contenido:");
            nuevoParrafo.textContent = nuevoContenidom;
        });
        
        nuevoDiv.appendChild(nuevoParrafo);
        nuevoDiv.appendChild(btnEliminar);
        nuevoDiv.appendChild(btnEditar);
        nuevoDiv.appendChild(document.createElement("br")); 
        nuevoDiv.appendChild(document.createElement("br")); 

        divProy.appendChild(nuevoDiv);

        contadorProy++;
    }
}

function eliminar_contenido_Proy() {//elimina el primer contenio 
    const divProy = document.getElementById("div-proyectos");
    const primerProy = divProy.querySelector(".proyectos-1");
    if (primerProy) {
        divProy.removeChild(primerProy);
    }
}

function cambiar_parrafo_Proy() {//cambia el primer contenio 
    const nuevoContenidom = prompt("Ingrese el nuevo contenido:");
    document.getElementById("contenidoProy-1").innerText = nuevoContenidom;
}

/*educacion*/

var infoArray =[
    {lugar:"Colegio Agustin Roscelli",nivel:"Jardin de Infantes - Estudios Primarios",fechas:"1986 - 1994",urlImagen:"urlImage"},
    {lugar:"Escuela Tecnica N° 3 Fray Luis Beltran (Los Hornos)",nivel:"Estudios Secundarios",fechas:"1995 - 2001",urlImagen:"urlImage"},    
];
var contadorDivs = 2;
var registroActual = -1;
var divModificando = -1;

    function agregar_educ() {
        let cont = prompt("Ingrese nuevo lugar de estudio", "");
        let cont2 = prompt("Ingrese nuevo estudios", "");
        let cont3 = prompt("Ingrese nuevo años", "");
        let urlImagen = "";
        agregarInformacionArray(cont, cont2, cont3, urlImagen);
        var div = document.getElementById("miDiv");
        var nuevoContenedor = crearNuevoContenedor(cont, cont2, cont3, urlImagen);
        div.appendChild(nuevoContenedor);
        registroActual = contadorDivs;
    }

    function agregarInformacionArray(contenido, contenido2, contenido3, urlImagen) {      
      infoArray.push({
        lugar: contenido,
        nivel: contenido2,
        fechas: contenido3,
        urlImagen: urlImagen
      });
    } 
    
    function mostrarInformacion() {
      var div = document.getElementById("miDiv");
      div.innerHTML = "";
      infoArray.forEach(function (item) {
      var nuevoContenedor = crearNuevoContenedor(item.lugar, item.nivel, item.fechas, item.urlImagen);
      div.appendChild(nuevoContenedor);
      });
    }
    
    function crearNuevoContenedor(lugar, nivel, fechas, urlImagen) {
        var div = document.getElementById("miDiv");
        var nuevoContenedor = document.createElement("div");
        nuevoContenedor.className = "Estudios";
        nuevoContenedor.id = "estudio_" + contadorDivs;

        var nuevaImagen = document.createElement("img");
        nuevaImagen.id = "logoED" + contadorDivs;
        nuevaImagen.src = urlImagen;
        nuevaImagen.alt = "Nueva imagen";
        nuevaImagen.style.border = "1px solid #0a0a0a";
        nuevaImagen.style.float = "left";
        nuevaImagen.style.marginRight = "5px";
        nuevaImagen.style.height = "70px";
        nuevaImagen.style.width = "70px";
        nuevaImagen.style.fontSize = "18px";
        nuevoContenedor.appendChild(nuevaImagen);
       
        var aside = document.createElement("aside");

        var titulo = document.createElement("b");
        titulo.id = "est" + contadorDivs;
        titulo.textContent = lugar;
        titulo.style.fontSize = "18px";
        aside.appendChild(titulo);

        var botonEliminar = document.createElement("div");
        botonEliminar.className = "btn-edit-sec";
        botonEliminar.id = "btn-elim-educ";
        botonEliminar.onclick = eliminar_educ;

        var enlaceEliminar = document.createElement("a");
        enlaceEliminar.href = "#";
        enlaceEliminar.className = "btn-right";
        enlaceEliminar.setAttribute("aria-label", "edit");

        var iconoEliminar = document.createElement("i");
        iconoEliminar.className = "fas fa-trash-alt";

        enlaceEliminar.appendChild(iconoEliminar);
        botonEliminar.appendChild(enlaceEliminar);
        aside.appendChild(botonEliminar);
        
        var botonEditar = document.createElement("div");
        botonEditar.className = "btn-edit-sec";
        botonEditar.id = "btn-camb-educ";
        botonEditar.addEventListener("click", cambiar_educ);

        var enlaceEditar = document.createElement("a");
        enlaceEditar.href = "#";
        enlaceEditar.className = "btn-right";
        enlaceEditar.setAttribute("aria-label", "edit");

        var iconoEditar = document.createElement("i");
        iconoEditar.className = "fa fa-pen";

        enlaceEditar.appendChild(iconoEditar);
        botonEditar.appendChild(enlaceEditar);
        aside.appendChild(botonEditar);
        
        var nuevoContenido = document.createElement("p");
        nuevoContenido.id = "text-est"+ contadorDivs;
        nuevoContenido.textContent = nivel;
        nuevoContenido.style.fontSize = "15px";
        nuevoContenido.style.margin = "0px 5px";
        aside.appendChild(nuevoContenido);
        
        var nuevoContenido2 = document.createElement("p");
        nuevoContenido2.id = "text-año-est"+ contadorDivs;
        nuevoContenido2.textContent = fechas;
        nuevoContenido2.style.fontSize = "12px";
        nuevoContenido2.style.margin = "0px 5px";
        aside.appendChild(nuevoContenido2);

        var salto = document.createElement("p");
        aside.appendChild(salto); 
       
        var botonAgregarImagen = document.createElement("div");
        botonAgregarImagen.className = "btn-edit-sec";
        botonAgregarImagen.id = "btn-agregar-img" + contadorDivs;
        botonAgregarImagen.addEventListener("click", function () {
        divModificando = nuevoContenedor.id.split("_")[1];
        document.getElementById("imagenInput").click();
        });

        var enlaceAgregarImagen = document.createElement("a");
        enlaceAgregarImagen.href = "#";
        enlaceAgregarImagen.className = "btn-right";
        enlaceAgregarImagen.setAttribute("aria-label", "add-image");

        var iconoAgregarImagen = document.createElement("i");
        iconoAgregarImagen.className = "fas fa-image";

        enlaceAgregarImagen.appendChild(iconoAgregarImagen);
        botonAgregarImagen.appendChild(enlaceAgregarImagen);
        aside.appendChild(botonAgregarImagen);
      
        nuevoContenedor.appendChild(aside);
        nuevoContenedor.appendChild(document.createElement("br"));

        contadorDivs++;
        
        div.appendChild(nuevoContenedor);   
    }

    function cambiar_educ() {
        let numDiv = this.parentNode.parentNode.id.split("_")[1];
        divModificando = numDiv;
        let valor = prompt("Nombre Institucion", infoArray[numDiv].lugar);
        if (valor !== null) {
            valor = valor.trim() || infoArray[numDiv].lugar;
            document.getElementById("est" + numDiv).textContent = valor;
            infoArray[numDiv].lugar = valor;
        }

        let valor1 = prompt("Estudios", infoArray[numDiv].nivel);
        if (valor1 !== null) {
            valor1 = valor1.trim() || infoArray[numDiv].nivel;
            document.getElementById("text-est" + numDiv).textContent = valor1;
            infoArray[numDiv].nivel = valor1;
        }

        let valor2 = prompt("Año", infoArray[numDiv].fechas);
        if (valor2 !== null) {
        valor2 = valor2.trim() || infoArray[numDiv].fechas;
        document.getElementById("text-año-est" + numDiv).textContent = valor2;
        infoArray[numDiv].fechas = valor2;
        }
        document.getElementById("imagenInput").click();
    }

    document.getElementById("imagenInput").addEventListener("change", function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function () {
                    const urlImagen = reader.result;
                    document.getElementById("logoED" + registroActual).src = urlImagen;
                    infoArray[registroActual].urlImagen = urlImagen;
                };
                reader.readAsDataURL(file);
            }
    });

    function cargarImagen(event) {
        var idbtnimgen = "btn-agregar-img" + (contadorDivs-1);
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                const urlImagen = reader.result;
                document.getElementById("logoED" + (divModificando !== -1 ? divModificando : registroActual)).src = urlImagen;
                infoArray[divModificando !== -1 ? divModificando : registroActual].urlImagen = urlImagen;
                if (divModificando !== -1) {
                    document.getElementById(idbtnimgen).classList.add("hide");
                }
            }; 
            reader.readAsDataURL(file);
            console.log(idbtnimgen);
        }
    }
    
    function cambiar_educ0() {////cambia el primer estudios
        let numDiv = 0;
        divModificando = numDiv;
        let valor = prompt("Nombre Institucion", infoArray[numDiv].lugar);
        if (valor !== null) {
            valor = valor.trim() || infoArray[numDiv].lugar;
            document.getElementById("est" + numDiv).textContent = valor;
            infoArray[numDiv].lugar = valor;
        }

        let valor1 = prompt("Estudios", infoArray[numDiv].nivel);
        if (valor1 !== null) {
            valor1 = valor1.trim() || infoArray[numDiv].nivel;
            document.getElementById("text-est" + numDiv).textContent = valor1;
            infoArray[numDiv].nivel = valor1;
        }

        let valor2 = prompt("Año", infoArray[numDiv].fechas);
        if (valor2 !== null) {
        valor2 = valor2.trim() || infoArray[numDiv].fechas;
        document.getElementById("text-año-est" + numDiv).textContent = valor2;
        infoArray[numDiv].fechas = valor2;
        }
        document.getElementById("imagenInput").click();
    }

    function cambiar_educ1() {//cambia el segundo estudios
        let numDiv = 1;
        divModificando = numDiv;
        let valor = prompt("Nombre Institucion", infoArray[numDiv].lugar);
        if (valor !== null) {
            valor = valor.trim() || infoArray[numDiv].lugar;
            document.getElementById("est" + numDiv).textContent = valor;
            infoArray[numDiv].lugar = valor;
        }

        let valor1 = prompt("Estudios", infoArray[numDiv].nivel);
        if (valor1 !== null) {
            valor1 = valor1.trim() || infoArray[numDiv].nivel;
            document.getElementById("text-est" + numDiv).textContent = valor1;
            infoArray[numDiv].nivel = valor1;
        }

        let valor2 = prompt("Año", infoArray[numDiv].fechas);
        if (valor2 !== null) {
        valor2 = valor2.trim() || infoArray[numDiv].fechas;
        document.getElementById("text-año-est" + numDiv).textContent = valor2;
        infoArray[numDiv].fechas = valor2;
        }
        document.getElementById("imagenInput").click();
    }
    
    function eliminar_educ(){//elimina todo estudio nuevo segun corresponda
        var divAEliminar = this.parentNode.parentNode;
        divAEliminar.remove();
    }

    function eliminar_educ0(){//elimina el primer estudio
        var divAEliminar = document.getElementById("estudio_0");
        divAEliminar.remove();
    }
    
    function eliminar_educ1(){// elimina el segundo estudio
        var divAEliminar = document.getElementById("estudio_1");
        divAEliminar.remove();
    }


    /*skills*/
    
    let skillCount = 2;

    function agregar_skill() {
      const nombreSkill = prompt("Ingrese el nombre de la habilidad:");
      if (nombreSkill === null || nombreSkill.trim() === "") {
        return;
      }

      const valorSkill = parseFloat(prompt("Ingrese el valor de la habilidad (de 0 a 100):"));
      if (isNaN(valorSkill) || valorSkill < 0 || valorSkill > 100) {
        alert("Por favor, ingrese un valor numérico válido entre 0 y 100.");
        return;
      }

      const skillDiv = document.createElement("div");
      skillDiv.className = "skills";
      skillDiv.id = `skill-${skillCount}`;

      const skillName = document.createElement("p");
      skillName.innerHTML = `<b>${nombreSkill}</b>`;
      skillName.style.fontSize = "12px";
      skillName.style.textAlign = "center";
      skillDiv.appendChild(skillName);

      const asideDiv = document.createElement("aside");

      const deleteButton = document.createElement("div");
      deleteButton.className = "btn-edit-sec";
      const deleteLink = document.createElement("a");
      deleteLink.className = "btn-right";
      deleteLink.href = "#";
      deleteLink.setAttribute("aria-label", "edit");
      const deleteIcon = document.createElement("i");
      deleteIcon.className = "fas fa-trash-alt";
      deleteLink.appendChild(deleteIcon);
      deleteButton.appendChild(deleteLink);
      deleteButton.setAttribute("data-id", skillCount);
      deleteButton.onclick = function () {
        const skillId = this.getAttribute("data-id");
        eliminar_skill(skillId);
      };
      asideDiv.appendChild(deleteButton);

      const editButton = document.createElement("div");
      editButton.className = "btn-edit-sec";
      const editLink = document.createElement("a");
      editLink.className = "btn-right";
      editLink.href = "#";
      editLink.setAttribute("aria-label", "edit");
      const editIcon = document.createElement("i");
      editIcon.className = "fa fa-pen";
      editLink.appendChild(editIcon);
      editButton.appendChild(editLink);
      editButton.setAttribute("data-id", skillCount);
      editButton.onclick = function () {
        const skillId = this.getAttribute("data-id");
        cambiar_porc(skillId);
      };
      asideDiv.appendChild(editButton);

      skillDiv.appendChild(asideDiv);

      const skillBar = document.createElement("div");
      skillBar.id = `barra${skillCount}`;
      skillBar.style.marginLeft = "12%";
      skillBar.style.width = "1000px";
      skillBar.style.height = "22px";
      skillBar.style.borderRadius = "10px";
      skillBar.style.border = "1px solid #0a0a0a";
      const skillBarPercentage = document.createElement("div");
      skillBarPercentage.id = `barra-porc${skillCount}`;
      skillBarPercentage.style.width = `${valorSkill}%`;
      skillBarPercentage.style.height = "20px";
      skillBarPercentage.style.borderRadius = "8px";
      skillBarPercentage.style.backgroundColor = "#011896";
      skillBar.appendChild(skillBarPercentage);
      skillDiv.appendChild(skillBar);

      const br = document.createElement("br");
      br.setAttribute("clear", "right");
      skillDiv.appendChild(br);

      const midivSkills = document.getElementById("midiv-skills");
      midivSkills.appendChild(skillDiv);

      skillCount++;
    }

    function cambiar_porc(id) {
      const nuevoValor = parseFloat(prompt("Ingrese el nuevo valor de la habilidad (de 0 a 100):"));
      if (isNaN(nuevoValor) || nuevoValor < 0 || nuevoValor > 100) {
        alert("Por favor, ingrese un valor numérico válido entre 0 y 100.");
        return;
      }

      const skillBarPercentage = document.getElementById(`barra-porc${id}`);
      skillBarPercentage.style.width = `${nuevoValor}%`;
    }

    function cambiar_porc0() {
        const nuevoValor = parseFloat(prompt("Ingrese el nuevo valor de la habilidad (de 0 a 100):"));
        if (isNaN(nuevoValor) || nuevoValor < 0 || nuevoValor > 100) {
          alert("Por favor, ingrese un valor numérico válido entre 0 y 100.");
          return;
        }
  
        const skillBarPercentage = document.getElementById(`barra-porc0`);
        skillBarPercentage.style.width = `${nuevoValor}%`;
    }

    function cambiar_porc1() {
        const nuevoValor = parseFloat(prompt("Ingrese el nuevo valor de la habilidad (de 0 a 100):"));
        if (isNaN(nuevoValor) || nuevoValor < 0 || nuevoValor > 100) {
          alert("Por favor, ingrese un valor numérico válido entre 0 y 100.");
          return;
        }
  
        const skillBarPercentage = document.getElementById(`barra-porc1`);
        skillBarPercentage.style.width = `${nuevoValor}%`;
    }

    function eliminar_skill(id) {//elimina los nuevos segun corresponde
      const skillDiv = document.getElementById(`skill-${id}`);
      skillDiv.remove();
    }

    function eliminar_skill0(){//elimina el primer skill
        var skillDiv = document.getElementById("skill-0");
        skillDiv.remove();
    }
    
    function eliminar_skill1(){// elimina el segundo skill
        var skillDiv = document.getElementById("skill-1");
        skillDiv.remove();
    }