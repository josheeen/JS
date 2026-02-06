//Array container for TODO's list.
const todoList = [{
  name: 'Read scriptures',
  dueDate: '2022-10-2'
}];

//To show what is inside the list.
renderTodoList();

//render is like to show something in the page.
function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    //Instead of the variables sa taas, use this one sa baba. This is called Ohjects Destructuring
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;

    todoListHTML += html;
  })

  //this for loop is another way to write the forEach loop above. forEach loop is much preferred if we are looping in an array.
  // for (let i = 0; i < todoList.length; i++) {
  //   const todoObject = todoList[i];
  //   // const name = todoObject.name;
  //   // const dueDate = todoObject.dueDate;
  //   //Instead of the variables sa taas, use this one sa baba. This is called Ohjects Destructuring
  //   const { name, dueDate } = todoObject;

  //   const html = `
  //     <div>${name}</div>
  //     <div>${dueDate}</div>
  //     <button onclick="
  //       todoList.splice(${i}, 1);
  //       renderTodoList();
  //     " class="delete-todo-button">Delete</button>
  //   `;

  //   todoListHTML += html;
  // }
  console.log(todoListHTML);
  console.log(typeof todoListHTML)

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}


function addToDo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-date-input');

  // get the value from the INPUT variable
  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  //add the value or data that is entered into Object Array. 
  todoList.push({
    // name: name,
    // dueDate: dueDate
    // eto ang tawag is shorthand property. Kasi parehas lang name nung property at variable.
    name, dueDate
  });

  //reset the text inside the INPUT and date box
  inputElement.value = '';
  dateInputElement.value = '';
  console.log(todoList);
  renderTodoList();
}


//instead of using onclick="" event listener inside HTML. use this one instead. 
const addButtonElement = document.querySelector('.js-add-to-do-button');
addButtonElement.addEventListener('click', addToDo)