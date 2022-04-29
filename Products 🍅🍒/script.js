let vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

let fruits = [
    {
        name: `watermelon`,
        icon: `🍉`,
        price: 7.7,
        season: true
    },
    {
        name: `cherries`,
        icon: `🍒`,
        price: 8.5,
        season: true
    },
    {
        name: `pineapple`,
        icon: `🍍`,
        price: 9.8
    }
];


//1  объект Product с двумя функциями

let Product = {

    getPrice() {   
        return this.season ? ((this.price * this.seasonKoef).toFixed(1)) : this.price;
    },

    getInfo() {

     return `Product: ${this.icon} ${this.name}. Type: ${this.type}. Price: ${this.getPrice()}.`
        }
      }


//2 объекта Product порождаем два объекта:

let Vegetable = Object.create(Product);
    Vegetable.type = `Vegetable`; 
    Vegetable.seasonKoef = 1.3;

let Fruit = Object.create(Product);
    Fruit.type = `Fruit`;
    Fruit.seasonKoef = 2;


   
//3 Создаем функцию makePrototype(arr, objectProto) 

function makePrototype(arr, objProto) {

let newArr = arr. map (item => {
            
            let newProduct = Object.create(objProto);
            
            for (let key in item) {
                newProduct[key] = item[key];
            }

            return newProduct;
    })
    
        .map(item => {
                     
            return `<li> ${item.getInfo()} </li>`
        })
        .join(``);

            return document.write(`<ul> ${newArr} </ul>`);

}

makePrototype(vegetables, Vegetable);
makePrototype(fruits, Fruit);









