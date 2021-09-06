const $inputs = document.querySelectorAll(".inputsForm"),

    $mensajeError = document.querySelectorAll(".mensajeError"),
    $mensajeError1 = document.querySelector(".mensajeError1"),
    $formulario = document.querySelector(".formulario"),
    $formularioPosta = document.querySelector(".formularioPosta"),
    $checkbox = document.querySelector(".checkbox");

const expresiones1 = {
    company: /^[a-zA-Z0-9\_\-]{3,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    textarea: /^.{4,255}$/, // 4 a 255 digitos.
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}


const campo1 = {
    name: false,
    mail: false,
    title: false,
    company: false,
    email: false,
}


const validarForm = (e) => {
    switch (e.target.name) {
        case "name":
            mensajes(expresiones1.nombre, e.target.value, 0, e.target.name)
            break;
        case "mail":
            mensajes(expresiones1.mail, e.target.value, 1, e.target.name)
            break;

        case "company":
            mensajes(expresiones1.company, e.target.value, 2, e.target.name)
            break;
        case "title":
            mensajes(expresiones1.company, e.target.value, 3, e.target.name)
            break;
        default:
            break;
    }
}

const mensajes = (expresion, valor, indice, campos) => {
    if (expresion.test(valor)) {
        $mensajeError[indice].style.display = "none"
        $inputs[indice].classList.remove("inputsFormInvalido")
        campo1[campos] = true
    } else {
        $inputs[indice].classList.add("inputsFormInvalido")
        $mensajeError[indice].style.display = "block"
        campo1[campos] = false
    }
}

$inputs.forEach(e => {
    e.addEventListener("blur", validarForm)
    e.addEventListener("keyup", validarForm)
})




document.addEventListener("click", e => {
    /* MENU MOBILE */
    if (e.target.matches(".btnBurguer")) $nav.classList.add("open")
    if (e.target.matches(".imagenCruz")) $nav.classList.remove("open")
    /* FIN DE MENU MOBILE */
})

$formularioPosta.addEventListener("submit", e => {
    e.preventDefault();

    if (campo1.name && campo1.mail && campo1.title && campo1.company) {
        $formularioPosta.reset();
        document.querySelector(".formEnviado").classList.add("active");
        setTimeout(() => {
            document.querySelector(".formEnviado").classList.remove("active");
        }, 2000);

    }
    /*else {
            document.querySelector(".formEnviado").classList.remove("active");
        }*/
})