(() => {
    const founders = [
        {
            id: "1",
            title: "JOHN BOMSTROM",
            description: "John and his brothers were from a poor family. John was the first to come to Cuba in search of better fortune and discovered the amazing properties of local tobacco.",
            image: "img/john.jpeg" 
        },
        {
            id: "2",
            title: "JACK BOMSTROM",
            description: "Jack took care of all the issues of managing the new enterprise since he graduated from the law faculty. Thanks to Jack, the Havana company still thrives.",
            image: "img/jack.jpeg" 
        },
        {
            id: "3",
            title: "HUGH BOMSTROM",
            description: "Hugh started developing Havana brand stores and opening them in different states of the USA. Most of our official stores are still open since 1970 and have a rich history.",
            image: "img/hugh.jpeg" 
        },
    ];

    function renderFounders(founders) {
        const foundersContainer = document.querySelector('.founders-brothers');
        for (const founder of founders) {
            foundersContainer.innerHTML += `
            <div class="founders-brothers__cards">
                <img class="founders-brothers__photo" src="${founder.image}" alt="John Bomstrom">
                <h2 class="founders-brothers__name title-text">${founder.title}</h2>
                <p class="founders-brothers__descr">${founder.description}</p>
                <div class="founders-brothers__soc">
                    <a class="btnsoc fa-brands fa-square-facebook" href="https://www.facebook.com/"  title="Facebook">
                    </a>
                    <a class="btnsoc fa-brands fa-instagram" href="https://www.instagram.com/"  title="Instagram">
                    </a>
                    <a class="btnsoc fa-brands fa-youtube" href="https://www.youtube.com/"  title="Youtube">
                    </a>
                </div>
            </div>
            `;
        }
    }

    renderFounders(founders);

})();