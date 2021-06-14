const app = Vue.createApp({
    data() {
        return {
            title: "Список дел: ",
            placeholderString: "Я хочу...",
            inputValue: "",
            notes: ['Выучить Javascript', 'Сделать портфолио', 'Найти работу'],
            completed: []
        };
    },
    methods: {
        addNote() {
            if (this.inputValue !== "") {
                this.notes.push(this.inputValue);
            }
            this.inputValue = '';
        },
        transformNote(value) {
            return value.toUpperCase();
        },
        markDone(index, noteItem) {
            this.notes.splice(index, 1);
            this.completed.push(noteItem);
        },
        deleteItem(index) {
            this.completed.splice(index, 1);
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 30) {
                this.inputValue = '';
            }
        }
    }
});

app.mount("#app");

