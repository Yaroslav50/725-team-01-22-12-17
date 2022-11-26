(() => {
    class Card {
    constructor(name, position, description, date) {
        this.name = name;
        this.position = position;
        this.description = description;
        this.date = date;
    }

    createHtmlBlock(){
        return '<div class="testimonials__cards-item"> \
        <h2 class="testimonials__card-h2">'  + this.name + '</h2> \
        <h3 class="testimonials__card-h3">'  + this.position + '</h3> \
        <p class="testimonials__card-text">' + this.description + '</p> \
        <h3 class="testimonials__card-h3">'  + this.date + '</h3> </div>';
    }
}

const cards = [
    new Card('Linda Peterson',
        'Procurement Manager at American Tobacco',
        'We have been working with this company for 30 years Havana \
        supplies us with high-quality pressed tobacco, which we then use to make our cigarettes \
        We are fully satisfied with the cooperation',
        'October 28,2017'),
    new Card('David Johnson',
        'Dicertor af Cigars Shop',
        '5 years ago we ordered several packages of Havana cigars. \
        They were sold out in our store in just a few hours. Since then, we sell more than 1,000 \
        Havana cigars each week in our small Oregon store',
        'June 12,2018'),
    new Card('Kyle Remden',
        'Director at Remden Cigar Shop',
        'I have been selling cigars and cigarillos for 10 years now. \
        The Havana products are highly appreciated by my customers and make up about 80% of the \
        assortment in my store. I am satisfied with the cooperation.',
        'January 04,2019'),
    new Card('Lucas Forrester',
        'Procurement Manager at Trader Joe`s',
        'We have been cooperating for 20 years, and are fully satisfied with the cooperation. \
        Our customers often choose Havana products. In the future, we will expand \
        the range of Havana cigars presented in our stores.',
        'March 21,2020')
]

function generateCards(){
    let testimonialCardsWrapper = document.querySelector('.testimonials__cards-wrapper');
    for(let i = 0; i < cards.length; i++){
        testimonialCardsWrapper.innerHTML += cards[i].createHtmlBlock();
    }
}
generateCards();

new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.testimonials__cards-prev-btn',
        prevEl: '.testimonials__cards-next-btn',
    },

    breakpoints: {
        520: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
});
})();