const todoList = [

    {
        name: 'make dinner',
        dueDate: '2022-12-22',
        completed: false
    },


    {
        name: 'wash dishes',
        dueDate: '2022-12-22',
        completed: false
    }

];



renderTodoList();



function renderTodoList() {


    let todoListHTML = '';



    for (let i = 0; i < todoList.length; i++) {


        const todoObject = todoList[i];


        const { name, dueDate, completed } = todoObject;



        const completedClass = completed ? "completed" : "";



        const html = `


        <div class="${completedClass}">

            <input type="checkbox"
            ${completed ? "checked" : ""}

            onclick="
            toggleComplete(${i});
            "

            >

            ${name}

        </div>


        <div class="${completedClass}">
            ${dueDate}
        </div>


        <button onclick="

            deleteTodo(${i});

        " class="delete-todo-button">

            Delete

        </button>


        `;



        todoListHTML += html;


    }



    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;


}





function addTodo() {


    const inputElement = document.querySelector(
        '.js-name-input'
    );


    const name = inputElement.value;



    const dateInputElement = document.querySelector(
        '.js-due-date-input'
    );


    const dueDate = dateInputElement.value;



    if (name === '') {

        alert("Please enter a todo");

        return;

    }



    todoList.push({

        name: name,

        dueDate: dueDate,

        completed: false

    });



    inputElement.value = '';

    dateInputElement.value = '';



    renderTodoList();

}





function deleteTodo(index) {


    todoList.splice(index, 1);


    renderTodoList();


}





function toggleComplete(index) {


    todoList[index].completed =
        !todoList[index].completed;


    renderTodoList();


}





document.querySelector('.js-name-input')
    .addEventListener('keydown', function (event) {


        if (event.key === "Enter") {


            addTodo();


        }


    });