// window.onload = function() {
//     setTimeout(() => {
//         window.location = "https://www.google.com" 
//     }, 3000)
// } // Redirecciona a otro sitio.

let $header = document.querySelector('header');
$header.addEventListener('click', function () {
    $header.classList.toggle('header-rojo')
})


let $ancla = document.querySelector('#ancla');
$ancla.addEventListener('click', function (event) {
    event.preventDefault()
    let response = confirm('Te queres ir?')
})


let $img1 = document.querySelector('#primer');
let $img2 = document.querySelector('#segunda');
$img1.addEventListener('mouseover', function () {
    console.log('Pasaste el mouse')
})
$img1.addEventListener('mouseout', function () {
    console.log('Quitaste el mouse')
})
$img2.addEventListener('dblclick', function () {
    document.querySelector('.modal-background').style.display = "flex"
})


let $noborrar = document.querySelector('#dontDelete')
$noborrar.addEventListener('click', function () {
    alert('Hay que animarse')
    document.querySelector('.modal-background').style.display = "none"
})


let $borrar = document.querySelector('#delete')
$borrar.addEventListener('click', function () {
    let borrar = confirm('¿Estás seguro que quieres eliminar este producto?')
    document.querySelector('.modal-background').style.display = "none"
})


let $inputNombre = document.querySelector('#nombre')
let $inputApellido = document.querySelector('#apellido')
$inputNombre.addEventListener('keydown', function (event) {
    let tecla = event.key
    if (tecla === "a") {
        alert('No me banco a nadie que su nombre empiece con a')
    }
})

document.body.style.cursor = 'wait'
$inputApellido.addEventListener('keyup', function (event) {
    let tecla = event.key
    console.log('Soltaste la tecla ' + tecla)
})

let $contador = document.querySelector('.contador')
let $btncontador = document.querySelector('#btn-contador')
let $stopcontador = document.querySelector('#btn-contador-stop')

let count = 0

let intervalo = () => {
    return setInterval(() => {
        count = count + 1
        $contador.innerText = count
    }, 1000)
}

$btncontador.addEventListener('click', function () {
    intervalo()
})
$stopcontador.addEventListener('click', function () {
    console.log()
    clearInterval(intervalo)
})