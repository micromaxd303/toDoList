const readlineSync = require("readline-sync");

class Work {

    /**
     * Присваиваем глобальные значения списку и статусу задания.
     * 
     * @param {*} toDoList 
     * @param {*} status 
     */
    constructor(toDoList, status){
        this.list = toDoList;
        this.status = status
    }

    /**
     * Показываем пользователю его список дел, помечая не выполненные дела красным, а остальные зеленым
     * 
     */
    showList(){
        console.log('Ваш список дел')
        for(let i = 0; i < this.list.length; i++){
            if(this.list[i].includes(`${this.status}`)){
                console.log("\x1b[31m", this.list[i])
            }
            else{
                console.log("\x1b[32m", this.list[i])
            }
        }
    }
    
    /** Спрашиваем пользователя какие дела он сегодня выполнил */
    askUser(){
        let answer = readlineSync.keyInSelect(this.list, 'Что вы выполнили сегодня ?')
        this.checkAnswer(answer)
    }

    /**
     * Проверяем, что там выбрал пользователь
     * 
     * @param {} answer 
     */
    checkAnswer(answer){
        if(answer > 0){
            this.placeMark(answer)
        }
        else{
            console.log('Пон. удачного дня')
            this.showList()
        }
    }

    /**
     * Заменяем статус задания на выполненный
     * 
     * @param {*} taskId 
     */
    placeMark(taskId){
        this.list[taskId] = this.list[taskId].replace(this.status, '(Выполнено)')
        this.askUser()
    }


}

module.exports = Work;