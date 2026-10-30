
/* ========================================
   ELEMENTOS DEL MODAL
======================================== */

const btnEventos = document.getElementById("btnEventos");
const btnVision = document.getElementById("btnVision");
const btnWhatsApp = document.getElementById("btnWhatsApp");
const btnServicios = document.getElementById("btnServicios");

const modalEvento = document.getElementById("modalEvento");
const cerrarEvento = document.getElementById("cerrarEvento");

const tituloModal = document.getElementById("tituloModal");
const descripcionModal = document.getElementById("descripcionModal");
const etiqueta = document.getElementById("etiqueta");
const datoModal = document.getElementById("datoModal");
const iconoModal = document.getElementById("iconoModal");

// Guardar el HTML original de los próximos eventos
const contenidoEventos = datoModal.innerHTML;


/* ========================================
   FUNCIONES GENERALES
======================================== */

// Abrir el modal con la información correspondiente
function abrirModal(etiquetaTexto, titulo, descripcion, iconos, contenido = null) {
    etiqueta.textContent = etiquetaTexto;
    tituloModal.textContent = titulo;
    descripcionModal.textContent = descripcion;

    // Limpiar las clases anteriores del icono
    iconoModal.classList.remove(
        "fa-solid",
        "fa-brands",
        "fa-calendar-days",
        "fa-compass",
        "fa-whatsapp"
    );

    // Añadir las clases del nuevo icono
    iconoModal.classList.add(...iconos);

    // Mostrar u ocultar la información adicional
    if (contenido !== null) {
        datoModal.innerHTML = contenido;
        datoModal.classList.remove("d-none");
    } else {
        datoModal.classList.add("d-none");
    }

    // Abrir el modal
    modalEvento.classList.add("activo");
}

// Cerrar el modal
function cerrarModal() {
    modalEvento.classList.remove("activo");
}


/* ========================================
   CERRAR EL MODAL
======================================== */

// Botón X
cerrarEvento.addEventListener("click", function (e) {
    e.preventDefault();
    cerrarModal();
});

// Cerrar al pulsar fuera de la ventana
modalEvento.addEventListener("click", function (e) {
    if (e.target === modalEvento) {
        cerrarModal();
    }
});

// Cerrar con Escape
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        cerrarModal();
    }
});


/* ========================================
   TARJETA: PRÓXIMOS EVENTOS
======================================== */

btnEventos.addEventListener("click", function (e) {
    e.preventDefault();

    abrirModal(
        "Próximos eventos",
        "Próximos eventos",
        "Descubre las próximas actividades y reuniones de LaVid Madrid. ¡Te esperamos para compartir momentos de fe, alegría y comunión!",
        ["fa-solid", "fa-calendar-days"],
        contenidoEventos
    );
});


/* ========================================
   TARJETA: NUESTRA VISIÓN
======================================== */

btnVision.addEventListener("click", function (e) {
    e.preventDefault();

    abrirModal(
        "Nuestra visión",
        "Nuestra visión",
        "Nuestra visión es edificar una iglesia de vencedores, donde cada miembro sea un ministro y cada hogar sea una extensión de la iglesia. Así buscamos alcanzar a nuestra generación para Cristo mediante células que se multiplican cada año.",
        ["fa-solid", "fa-compass"]
    );
});


/* ========================================
   TARJETA: WHATSAPP
======================================== */

btnWhatsApp.addEventListener("click", function (e) {
    e.preventDefault();

    abrirModal(
        "Ponte en contacto",
        "Contacta con nosotros",
        "Actualmente, nuestra iglesia todavía no dispone de un número propio de WhatsApp. Sin embargo, puedes contactar con nosotros a través de nuestro Instagram. ¡Estaremos encantados de conocerte!",
        ["fa-brands", "fa-whatsapp"]
    );
});


/* ========================================
   TARJETA: SERVICIOS
======================================== */

btnServicios.addEventListener("click", function (e) {
    e.preventDefault();

    const horariosServicios = `
        <div class="horario-servicios">

            <div class="servicio-item">
                <i class="fa-solid fa-hands-praying"></i>
                <div>
                    <h3>Martes</h3>
                    <p>Reunión de oración</p>
                    <span>20:30 h</span>
                </div>
            </div>

            <div class="servicio-item">
                <i class="fa-solid fa-music"></i>
                <div>
                    <h3>Sábado</h3>
                    <p>Culto de jóvenes</p>
                    <span>19:00 h</span>
                </div>
            </div>

            <div class="servicio-item">
                <i class="fa-solid fa-church"></i>
                <div>
                    <h3>Domingo</h3>
                    <p>Servicio general</p>
                    <span>De 11:00 a 13:00 h</span>
                </div>
            </div>

        </div>
    `;

    abrirModal(
        "Nuestros servicios",
        "Horarios de reunión",
        "En LaVid Madrid nos reunimos para buscar la presencia de Dios, crecer en la fe, compartir su Palabra y fortalecer nuestra comunidad. ¡Será un placer recibirte!",
        ["fa-solid", "fa-calendar-days"],
        horariosServicios
    );
});



