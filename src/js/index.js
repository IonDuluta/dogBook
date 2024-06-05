const sezione = document.getElementById("pagina-scroll")
const tornaSU = document.getElementById("torna-su")
let currentPage = 'pagina-api'

function navigateTo(page) {
    
    const main = document.querySelector('main')
    const sections = main.querySelectorAll('section')
    history.pushState({
        page
    }, null, page);
    currentPage = page;

    for (let section of sections) {
        if (section.id === page) {
            section.classList.remove("hidden")
        } else {
            section.classList.add("hidden")
        }

    }
}

function handleScrolltop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

window.addEventListener('scroll', function () {
    if (currentPage == 'pagina-scroll') {
        const altezzaSezione = sezione.scrollHeight;
        const posizioneScroll = window.scrollY || window.pageYOffset;

        const percentualeScroll = (posizioneScroll / altezzaSezione) * 100

        console.log(percentualeScroll);

        if (percentualeScroll >= 40) {
            tornaSU.classList.remove("hidden")
        } else {
            tornaSU.classList.add("hidden")
        }
    }
})

fetch('https://dog.ceo/api/breeds/image/random/40')
    .then(response => response.json())
    .then((data) => {
        const paginaApi = document.getElementById("pagina-api")
        data.message.forEach(imageSrc => {
            const divContainer = document.createElement("div")
            const img = document.createElement("img")
            img.className = "h-auto max-w-full rounded-lg"
            img.src = imageSrc
            divContainer.appendChild(img)
            paginaApi.appendChild(divContainer)
        });
    })

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")
    const confirmPasswordInput = document.getElementById("confirm-password")
    const newsletterInput = document.getElementById("newsletter")
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(emailInput.value)){
        console.log("email non valida")
        return
    }
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if(!passwordRegex.test(passwordInput.value)){
        console.log("la password non rispeta i limiti")
        return
    }

    if(passwordInput.value !== confirmPasswordInput.value){
        console.log("le password non corrispondono")
        return
    }

    if(!newsletterInput.checked){
        console.log("acceta la newsletter");
        return
    }

    console.log("well done");
})


