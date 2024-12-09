//Вариант 3

//Задание 1

let numbers: number [] = [1, 2, 3, 4, 5];
let matrix = [
    [1, 5, 7, 8],
    [2, 6, 3, 9],
    [10, 12, 4, 15]
];


function ariphmeticMedian(numbers: number[]): number {
        let summ: number = 0;
        for(let i =0; i < numbers.length; i++){
                summ += numbers[i];
        }   
        return summ/numbers.length;
}

function countValuesInRange(matrix: number[][], min: number, max: number): number {
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

//Задание 2

type MyTuple = [string, string, number];

function tupleToSring(tuple: MyTuple): string{
    const [str0, str1, num] = tuple;
    return `${str0} ${num} ${str1}`;
}

const myTuple: MyTuple = ["Начало","Конец",1];
console.log(tupleToSring(myTuple));

//Задание 3

enum VegetableOil {
    Rapeseed = "Рапсовое",
    Sunflower = "Подсолнечное",
    Olive = "Оливковое",
    Corn = "Кукурузное",
    Soybean = "Соевое"
}

console.log(VegetableOil.Soybean);

//Задание 4

class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
   }
   class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }
   }
   class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
    return "Miyau!";
   }
}

function printPetInfo<T extends Pet>(pet: T): void {
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

enum VegetableOil1 {
    Rapeseed = "Рапсовое",
    Sunflower = "Подсолнечное",
    Olive = "Оливковое",
    Corn = "Кукурузное",
    Soybean = "Соевое"
}

type OilInfo = {
    type: VegetableOil;       
    price: number;    
    packaging: string;        
    isOrganic: boolean;          
}

const sunflowerOil: OilInfo = {
    type: VegetableOil.Sunflower,
    price: 150, 
    packaging: "пластиковая бутылка",
    isOrganic: true,
}

console.log(JSON.stringify(sunflowerOil, null, 2));
