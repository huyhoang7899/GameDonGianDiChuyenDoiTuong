const speed = 50;

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += speed;
    }
    this.moveLeft = function () {
        this.left -= speed;
    }
    this.moveTop = function () {
        this.top -= speed;
    }
    this.moveDown = function () {
        this.top += speed;
    }
}

var hero = new Hero('psyduck.png', 20, 30, 250);

function start() {
    if (hero.left < window.innerWidth - hero.size) {
        if(hero.top === 20){
            hero.moveRight();
        }

    }else if (hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
    }
    if(hero.top>=window.innerHeight-hero.size&&hero.left>=80) {
        hero.moveLeft();
    }
    if (hero.left===80 &&hero.top>=70){
        hero.moveTop();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 10);
}

start();