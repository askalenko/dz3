// Студены
// Написать функцию конструктор Student, которую я смогу использовать вот так:

// const students = [ 
//   new Student('Student 1', [10,9,8,0,10]), // имя, оценки
//   new Student('Student 12', [10,0,8,0,3,4])
//  ];
// У каждого студента должны быть методы

// averageMark() - возвращает среднюю оценку
// woksDone() - врзвращает количество сданных работ (у которых оценка больше 0)
// addMark(8) - добавляет еще одну оценку студенту
// Также написать функции

// averageMark() - которая возвращает среднюю оценку по группе
// coьpletePercent() - процент сданных работ по группе



"use strict";

//конструктор 
function Student(name, marksArr) {   
    this.name = name; 
    this.marksArr = marksArr;
}

//средний балл
//добавили метод к функции конструктор через prototype
Student.prototype.averageMark = function() {
    let total = getArrItemsSum(this.marksArr);  //сумма массива 
    let average = total / this.marksArr.length; //делим на длину массива чтобы узнать среднее
    return Math.floor(average * 100) / 100; // Найбільше ціле число, менше або рівне даному числу.
}


//узнаем количество сданых работ - оценка которых больше 0
//передаем item, возвращаем длину массива с оценками больше 0
Student.prototype.worksDone = function() {
    return this.marksArr.filter((item) => item > 0).length; /*Метод «arr.filter(callback[, thisArg])» используется для 
                                                            фильтрации массива через функцию.
                                                                Он создаёт новый массив, в который войдут только те элементы arr,
                                                                 для которых вызов callback(item, i, arr) возвратит true.*/
}

Student.prototype.addMark = function(mark) {  //добавляем оценки - push - Добавляет элемент в конец массива:
    this.marksArr.push(mark);
}

//количество оценок 
Student.prototype.getMarksQuantity = function() { 
    return this.marksArr.length;
}

//сумма всех элементов массива
function getArrItemsSum(arr) {
    return arr.reduce((sum, current) => {  /*Метод «arr.reduce(callback[, initialValue])» используется для 
                                            последовательной обработки каждого элемента массива 
                                            с сохранением промежуточного результата.*/
        return sum + current;
      }, 0);
};


//средня оценка группы
function averageGroupMark() {   
    let averageMarkArr = [];                        
    let total = 0;                                  
    for(let i = 0; i < students.length; i++) {         //перебираем весь массив студентов
        averageMarkArr.push(students[i].averageMark()); //в массив добавлем средний балл по каждому студенту
                                                        /*массив средних оценок группы*/
        total += averageMarkArr[i];                      //(?) в тотал записываем индекс полученного массива  
    }
    return total / averageMarkArr.length;               //средняя оцека группы 
}

function completePercent() {
    let worksDoneCount = 0;
    let allWorksCount = 0;
    for(let i = 0; i < students.length; i++) {
        worksDoneCount += students[i].worksDone();
        console.log('worksDoneCount' + worksDoneCount)
        allWorksCount += students[i].getMarksQuantity();
         console.log('allWorksCount' + allWorksCount)
    }
    let completedWorks = (worksDoneCount * 100) / allWorksCount;
    return Math.floor(completedWorks * 100) / 100;
}

const students = [ 
    new Student('Student 1', [10,9,8,0,10]),
    new Student('Student 12', [10,0,8,0,3,4])
];


