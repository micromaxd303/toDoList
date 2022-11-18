// Классы для работы с пользователем
const Work = require('./classes/work.js');
const SortList = require('./classes/sortList.js');


// Фигачим пятилетний план
const list = require('./list/makingList.js');

// Определяем как отмечается не выполненная задача
const status = '(Не выполнено)'

// Превращаем наш лист в массив
const toDoList = new SortList(list, status)

// Запуск 
const process = new Work(toDoList.sorting(), status);
process.askUser()
