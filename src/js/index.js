function navigateTo(page) {
    //mostrare contenuto corretto
    //cambiare url mostrato
    const main = document.querySelector('main')
    const sections = main.querySelectorAll('section')
    console.log(sections);

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