import "./style.css";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

console.log(form, input);

// add todo
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addTodo(value);
});

const todos = [
  {
    text: "I'm a todo",
    done: false,
  },
  {
    text: "doing JavaScript",
    done: true,
  },
];

const displayTodo = () => {
  // iterate through array and call a function for each entries
  const todosNode = todos.map((todo, index) => {
    return createTodoElement(todo, index);
  });

  ul.innerHTML = ""; // delete existing ul content
  ul.append(...todosNode);
};

// create html element for given parameters
const createTodoElement = (todo, index) => {
  const li = document.createElement("li");
  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = "Delete";
  buttonDelete.addEventListener("click", (event) => {
    event.stopPropagation(); // to avoid toggle next todo's state, when deleting the current one
    deleteTodo(index);
  });
  li.innerHTML = `
  <span class="todo ${todo.done ? "done" : ""}"></span>
  <p>${todo.text}</p>
  `;
  li.addEventListener("click", (event) => {
    toggleTodo(index);
  });
  li.appendChild(buttonDelete);
  return li;
};

const addTodo = (text) => {
  todos.push({
    text,
    done: false,
  });
  displayTodo();
};

const deleteTodo = (index) => {
  todos.splice(index, 1);
  displayTodo();
};

const toggleTodo = (index) => {
  todos[index].done = !todos[index].done;
  displayTodo();
};

displayTodo();
