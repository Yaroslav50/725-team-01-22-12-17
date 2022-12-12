(() => {
class Row {
    constructor(imgPath, name, pack, price){
        this.imgPath = imgPath;
        this.name  = name;
        this.pack = pack;
        this.price = price;
    }

    createHtmlBlock(){
        return '<div class="pricing-cards__item"> \
            <img class="pricing-card__img" src="' + this.imgPath + '" alt="spiral image"> \
            <h3 class="pricing-cards__h3">' + this.name + '</h3> \
            <h4 class="pricing-cards__h4">' + this.pack + '-Pack</h4> \
            <p class="pricing-cards__text"><span class="pricing-cards__span">$' + this.price + '</span> | per sigar</p> \
            <button class="pricing-cards__btn"> <a href="#contacts">ORDER</a></button></div>'
    }
}

const table = [
    new Row('img/pricing_estandar.svg','ESTENDAR','10','12'),
    new Row('img/prising_reserva.svg', 'RESERVA', '24', '20'),
    new Row('img/pricing_limitada.svg', 'LIMITADA', '6', '27')
]

function generateTable() {
    let cardsBlock = document.querySelector('.pricing-cards');
    for(let i = 0; i < table.length; i++) {
        cardsBlock.innerHTML += table[i].createHtmlBlock();
    }
}

generateTable();
})();