"use strict";
//Вариант 3
//Задание 1
let numbers = [1, 2, 3, 4, 5];
let matrix = [
    [1, 5, 7, 8],
    [2, 6, 3, 9],
    [10, 12, 4, 15]
];
function ariphmeticMedian(numbers) {
    let summ = 0;
    for (let i = 0; i < numbers.length; i++) {
        summ += numbers[i];
    }
    return summ / numbers.length;
}
function countValuesInRange(matrix, min, max) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const value = matrix[i][j];
            if (value >= min && value <= max) {
                count++;
            }
        }
    }
    return count;
}
console.log(ariphmeticMedian(numbers));
console.log(countValuesInRange(matrix, 4, 8));
function tupleToSring(tuple) {
    const [str0, str1, num] = tuple;
    return `${str0} ${num} ${str1}`;
}
const myTuple = ["Начало", "Конец", 1];
console.log(tupleToSring(myTuple));
//Задание 3
var VegetableOil;
(function (VegetableOil) {
    VegetableOil["Rapeseed"] = "\u0420\u0430\u043F\u0441\u043E\u0432\u043E\u0435";
    VegetableOil["Sunflower"] = "\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435";
    VegetableOil["Olive"] = "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435";
    VegetableOil["Corn"] = "\u041A\u0443\u043A\u0443\u0440\u0443\u0437\u043D\u043E\u0435";
    VegetableOil["Soybean"] = "\u0421\u043E\u0435\u0432\u043E\u0435";
})(VegetableOil || (VegetableOil = {}));
console.log(VegetableOil.Soybean);
//Задание 4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printPetInfo(pet) {
    console.log(`Информация о питомце:`);
    console.log(`Имя: ${pet.name}`);
    console.log(`Возраст: ${pet.age}`);
    console.log(`Голос: ${pet.speak()}`);
    if (pet instanceof Dog) {
        console.log(`Кличка: ${pet.label}`);
    }
}
const dog = new Dog();
const cat = new Cat();
printPetInfo(dog);
printPetInfo(cat);
//Задание 5
var VegetableOil1;
(function (VegetableOil1) {
    VegetableOil1["Rapeseed"] = "\u0420\u0430\u043F\u0441\u043E\u0432\u043E\u0435";
    VegetableOil1["Sunflower"] = "\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435";
    VegetableOil1["Olive"] = "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435";
    VegetableOil1["Corn"] = "\u041A\u0443\u043A\u0443\u0440\u0443\u0437\u043D\u043E\u0435";
    VegetableOil1["Soybean"] = "\u0421\u043E\u0435\u0432\u043E\u0435";
})(VegetableOil1 || (VegetableOil1 = {}));
const sunflowerOil = {
    type: VegetableOil.Sunflower,
    price: 150,
    packaging: "пластиковая бутылка",
    isOrganic: true,
};
console.log(JSON.stringify(sunflowerOil, null, 2));
