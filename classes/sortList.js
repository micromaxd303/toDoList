class SortList{
    constructor(list, status) {
        this.list = list;
        this.status = status
    }
 
    /**
     * Разбираем хэш-таблицу на пару ключ/значение и пушим в массив
     * @return {array}
     */
    sorting() {
        let toDoList = [];

        for (const [number, toDo] of this.list) {
            toDoList.push(`${toDo}. ${this.status}`)
        }

        return toDoList;
    }
}

module.exports = SortList;