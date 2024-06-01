class Todo {
    constructor() {
        this.notes = [];
    }

    // Додавання нової нотатки
    addNote(note) {
        if (note.trim() !== '') {
            const currentDate = new Date();
            this.notes.push({ 
                content: note, 
                completed: false, 
                created: currentDate,
                edited: currentDate 
            });
            console.log('Нова нотатка додана.');
        } else {
            console.log('Нотатка не може бути порожньою.');
        }
    }

    // Видалення нотатки
    deleteNote(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes.splice(index, 1);
            console.log('Нотатка видалена.');
        } else {
            console.log('Нотатки з таким індексом не існує.');
        }
    }

    // Редагування нотатки
    editNote(index, newContent) {
        if (index >= 0 && index < this.notes.length) {
            if (newContent.trim() !== '') {
                const currentDate = new Date();
                this.notes[index].content = newContent;
                this.notes[index].edited = currentDate;
                console.log('Нотатка відредагована.');
            } else {
                console.log('Нотатка не може бути порожньою.');
            }
        } else {
            console.log('Нотатки з таким індексом не існує.');
        }
    }

    // Позначення нотатки як виконаної
    markAsCompleted(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes[index].completed = true;
            console.log('Нотатка позначена як виконана.');
        } else {
            console.log('Нотатки з таким індексом не існує.');
        }
    }

    // Отримання повної інформації про нотатку
    getNoteInfo(index) {
        if (index >= 0 && index < this.notes.length) {
            console.log(this.notes[index]);
        } else {
            console.log('Нотатки з таким індексом не існує.');
        }
    }

    // Отримання списку всіх нотаток
    getAllNotes() {
        console.log(this.notes);
    }

    // Пошук нотаток за ім'ям
    searchNotesByName(name) {
        const foundNotes = this.notes.filter(note => note.content.toLowerCase().includes(name.toLowerCase()));
        console.log(foundNotes);
    }

    // Сортування нотаток за статусом (виконані спочатку)
    sortNotesByStatus() {
        this.notes.sort((a, b) => {
            if (a.completed === b.completed) {
                return 0;
            } else if (a.completed) {
                return -1;
            } else {
                return 1;
            }
        });
        console.log('Нотатки відсортовані за статусом.');
    }

    // Сортування нотаток за датою створення
    sortNotesByCreatedDate() {
        this.notes.sort((a, b) => {
            return a.created - b.created;
        });
        console.log('Нотатки відсортовані за датою створення.');
    }

    // Сортування нотаток за датою редагування
    sortNotesByEditedDate() {
        this.notes.sort((a, b) => {
            return a.edited - b.edited;
        });
        console.log('Нотатки відсортовані за датою редагування.');
    }

    // Отримання кількості всіх нотаток
    getTotalNotes() {
        console.log(`Загальна кількість нотаток: ${this.notes.length}`);
    }

    // Отримання кількості виконаних нотаток
    getCompletedNotes() {
        const completed = this.notes.filter(note => note.completed).length;
        console.log(`Кількість виконаних нотаток: ${completed}`);
    }

    // Отримання кількості невиконаних нотаток
    getIncompleteNotes() {
        const incomplete = this.notes.filter(note => !note.completed).length;
        console.log(`Кількість невиконаних нотаток: ${incomplete}`);
    }
}

// Приклад використання
const todoList = new Todo();
todoList.addNote("Приготувати обід");
todoList.addNote("Почистити кімнату");
todoList.markAsCompleted(0);
todoList.editNote(1, "Помити посуд");
todoList.searchNotesByName("обід");
todoList.sortNotesByStatus();
todoList.sortNotesByCreatedDate();
todoList.sortNotesByEditedDate();
todoList.getAllNotes();
todoList.getTotalNotes();
todoList.getCompletedNotes();
todoList.getIncompleteNotes();
