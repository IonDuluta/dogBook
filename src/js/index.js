function navigateTo(page) {
    //mostrare contenuto corretto
    //cambiare url mostrato
    const main = document.querySelector('main')
    const sections = main.querySelectorAll('section')
    history.pushState({ page }, null, page);

    for (let section of sections) {
        if (section.id === page) {
            section.classList.remove("hidden")
        } else {
            section.classList.add("hidden")
        }
        // case "api":
        //     break
        // case "scroll":
        //     break
        // case "modulo":
        //     break
        // default:
        //     break
        // }
    }
}

function handleScrolltop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
const sezione = document.getElementById("pagina-scroll")
const tornaSU = document.getElementById("torna-su")

window.addEventListener('scroll', function () {
    const altezzaSezione = sezione.scrollHeight;
    const posizioneScroll = window.scrollY || window.pageYOffset ;

    const percentualeScroll = (posizioneScroll / altezzaSezione) * 100

    console.log(percentualeScroll);

    if (percentualeScroll >= 60) {
        tornaSU.classList.remove("hidden")
    }else{
        tornaSU.classList.add("hidden")

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

