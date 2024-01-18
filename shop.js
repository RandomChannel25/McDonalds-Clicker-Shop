var DaMoney = 0;

function moneyClick() {
DaMoney = DaMoney += 1;
Money.innerHTML = DaMoney
}

var priceOne = 50
function buyOne() {
    if (DaMoney >= priceOne) {
    DaMoney = DaMoney -= priceOne;
    priceOne = priceOne = -1;
    buyOneClear()
    }
}

function buyOneClear() {
    if (priceOne === -1) {
    One.innerHTML = "9072041919";
    Money.innerHTML = DaMoney;
    priceOne = priceOne = 0
    imgBuyOne.innerHTML = "PURCHASED!!!"
    }
}

var priceTwo = 500
function buyTwo() {
    if (DaMoney >= priceTwo) {
    DaMoney = DaMoney -= priceTwo;
    priceTwo = priceTwo = -1;
    buyTwoClear()
    }
}

function buyTwoClear() {
    if (priceTwo === -1) {
    Two.innerHTML = "7382547826";
    Money.innerHTML = DaMoney;
    priceTwo = priceTwo = 0
    imgBuyTwo.innerHTML = "PURCHASED!!!"
    }
}

var priceThree = 1000
function buyThree() {
    if (DaMoney >= priceTwo) {
    DaMoney = DaMoney -= priceThree;
    priceThree = priceThree = -1;
    buyThreeClear()
    }
}

function buyThreeClear() {
    if (priceThree === -1) {
    Three.innerHTML = "3729163482";
    Money.innerHTML = DaMoney;
    priceThree = priceThree = 0
    imgBuyThree.innerHTML = "PURCHASED!!!"
    }
}

var priceFour = 1500
function buyFour() {
    if (DaMoney >= priceFour) {
    DaMoney = DaMoney -= priceFour;
    priceFour = priceFour = -1;
    buyFourClear()
    }
}

function buyFourClear() {
    if (priceFour === -1) {
    Four.innerHTML = "4057791862";
    Money.innerHTML = DaMoney;
    priceFour = priceThree = 0
    imgBuyFour.innerHTML = "PURCHASED!!!"
    }
}
