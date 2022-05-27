const nav_mobile_scale = function () {
    const burger = document.querySelector(".burger");
    const nav_links = document.querySelector(".links");
    const array_of_links = document.querySelectorAll(".links li")
    burger.addEventListener('click', () => {
        let boolean_value = nav_links.classList.toggle("burger_clicked");
        /*        Start modification of links' opacity         */
        if (boolean_value) {
            array_of_links.forEach(function (element, index) {
                element.style.animation = `links_animation 0.5s ease forwards ${(index / 7) + 0.02}s`;
            })
        } else {
            array_of_links.forEach(function (element, index) {
                element.style.animation = "";
            })
        }
        /*        End   modification of links' opacity         */
    })
}
nav_mobile_scale();