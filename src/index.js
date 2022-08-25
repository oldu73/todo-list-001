import "./style.css";

const ul = document.querySelector("ul");

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
  li.innerHTML = `
  <span class="todo ${todo.done ? "done" : ""}"></span>
  <p>${todo.text}</p>
  <button>Delete</button>
  `;
  return li;
};

displayTodo();
