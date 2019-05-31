Vue.component('todo-item', {
    props: ['todo'],
    template: "<li v-bind:class=\"todo.done ? 'red' : ''\">{{ todo.text }}</li>"
})

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        title: 'Goodbye!!!!!',
        seen: true,
        todos: [
            { id: 1, text: 'Learn Javascript', done: false },
            { id: 2, text: 'Learn Vue', done: false },
            { id: 3, text: 'Build something awesome', done: false }
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
