const $btnBurguer = document.querySelector("btnBurguer"),
    $nav = document.querySelector(".nav"),
    $input = document.querySelector(".input")
    $mensajeError = document.querySelectorAll(".mensajeError"),
    $mensajeError1 = document.querySelector(".mensajeError1"),
    $formulario = document.querySelector(".formulario"),
    $formularioPosta = document.querySelector(".formularioPosta"),
    $checkbox = document.querySelector(".checkbox");

const expresiones = {
    company: /^[a-zA-Z0-9\_\-]{3,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    textarea: /^.{4,255}$/, // 4 a 255 digitos.
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}


const campo = {
    name: false,
    mail: false,
    title: false,
    company: false,
}


const validarMail = (e) => {
    switch (e.target.name) {
        case "email1":
            if (expresiones.mail.test(e.target.value)) {
                $mensajeError1.style.display = "none"
                $input.classList.remove("inputsFormInvalido")
                campo.mail = true
            } else {
                $input.classList.add("inputsFormInvalido")
                $mensajeError1.style.display = "block"
                campo.mail = false
            }
            break;
        default:
            console.log("ce mamo")
            break;
    }
    
}


$input.addEventListener("blur", validarMail)
$input.addEventListener("keyup", validarMail)



document.addEventListener("click", e => {
    /* MENU MOBILE */
    if (e.target.matches(".btnBurguer")) $nav.classList.add("open")
    if (e.target.matches(".imagenCruz")) $nav.classList.remove("open")
    /* FIN DE MENU MOBILE */
})


$formulario.addEventListener("submit", e => {
    e.preventDefault();
    console.log(campo)
    if(campo.mail) {
        $formulario.reset();
        document.querySelector(".inscripcion").classList.add("active");
        setTimeout(() => {
            document.querySelector(".inscripcion").classList.remove("active");
        }, 2000);

    } 
})
