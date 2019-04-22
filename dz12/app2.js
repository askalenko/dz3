// Гамбургер
// Сеть фастфудов предлагает несколько видов гамбургеров:



// маленький (50 тугриков, 20 калорий)
// большой (100 тугриков, 40 калорий)
// Гамбургер может быть с одним из нескольких видов начинок:



// сыром (+ 10 тугриков, + 20 калорий)
// салатом (+ 20 тугриков, + 5 калорий)
// картофелем (+ 15 тугриков, + 10 калорий)
// Можно добавить добавки:



// посыпать приправой (+ 15 тугриков, 0 калорий)
// полить майонезом (+ 20 тугриков, + 5 калорий).
// Напишите программу, расчитывающую стоимость и калорийность гамбургера.
//  Используй ООП подход (подсказка: нужен класс Гамбургер, константы, 
//     методы для выбора опций и рассчета нужных величин).


// функция конструктор, размер и начинка
function Hamburger(size, filling) {
    this.size = size;  
    this.filling = filling;
    this.toppings = [];
}


//константа является обычной переменной, то есть её можно изменить. Но мы договариваемся этого не делать.
// Константы используют вместо строк и цифр, чтобы сделать программу понятнее и избежать ошибок.


//Hamburger.SIZE_SMALL таким обьявлением ГамбургерУ сделали метод Большой Бургер (?) 



Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20
}

Hamburger.SIZE_BIG = {
    price: 100,
    calories: 40
}

Hamburger.TOPPING_SAUCE = {
    price: 15,
    calories: 0
}

Hamburger.TOPPING_MAYO = {
    price: 20,
    calories: 5
}

Hamburger.STUFFING_CHEESE = {
    price: 10,
    calories: 20
}

Hamburger.STUFFING_SALAD = {
    price: 20,
    calories: 5
}

Hamburger.STUFFING_POTATO = {
    price: 15,
    calories: 10
}

//Создаем метод, который наследует Гамбургер
//Метод reduce используется для вычисления на основе массива какого-либо единого значения, иначе говорят «для свёртки массива».
Hamburger.prototype.calculateCalories = function() {
    let toppingCalories = this.toppings.reduce((sum, topping)=>{   //перебираем все начинки и узнаем сумму каллорий всех топингов
        console.log(sum, topping.calories); 
        return sum + topping.calories; // 0 + 5
    }, 0);
    // console.log(' this.size.calories  ' + this.size.calories)
    // console.log('this.filling.calories  ' + this.filling.calories)
    // console.log('toppingCalories  ' + toppingCalories)
    // let b = this.size.calories + this.filling.calories + toppingCalories; 
     // console.log('b' + b);
    return this.size.calories + this.filling.calories + toppingCalories; //каллории размера начинки добавки
   
}


//цена
Hamburger.prototype.calculatePrice = function() { 
    let toppingPrice = this.toppings.reduce((sum, topping)=>{    //цена всех добавок 
        return sum + topping.price;
    }, 0);

    return this.size.price + this.filling.price + toppingPrice; //цена всех ингредиентов
}


//добавки пушим(добавляем в конец массива) 
Hamburger.prototype.addTopping = function(topping) {
    this.toppings.push(topping);
}


// маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log('Calories: ' + hamburger.calculateCalories());
// сколько стоит
console.log('Price: ' + hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// А сколько теперь стоит?
console.log('Price with sauce: ' + hamburger.calculatePrice());