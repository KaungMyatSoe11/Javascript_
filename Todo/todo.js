const inp_task = document.getElementById("task");
const task_list = document.getElementById("task-list");
const frm = document.getElementById("frm");
const btn_delete_all = document.getElementById("btn-delete-all");
let tasks = [];

const generateID = () => Math.round(Math.random() * 100000000);

frm.addEventListener("submit", (el) => {
  el.preventDefault();
  if (inp_task.value.trim()) {
    //*Day-16
    const newTask = {
      id: generateID(),
      text: inp_task.value.trim(),
      completed: false,
    };
    //*End Day-16
    const li_el = document.createElement("li");
    li_el.innerHTML = `<p>${inp_task.value.trim()}</p>`;

    task_list.append(li_el);
    inp_task.value = "";
    inp_task.focus();
    console.log(newTask);
    //*Day-16
    tasks.push(newTask);
    localStorage.setItem("tasks_data", JSON.stringify(tasks));
    console.log(tasks);
    //*End Day-16
  } else {
    // alert("enter your task");
    inp_task.style.borderColor = "red";
    document.getElementById("error-message").style.display = "inline";
  }
});

inp_task.addEventListener("keyup", () => {
  if (inp_task.value.trim()) {
    inp_task.style.borderColor = "gray";
    document.getElementById("error-message").style.display = "none";
  }
});

btn_delete_all.addEventListener("click", () => {
  const tasklist = task_list.children.length;
  for (let i = 0; i < tasklist; i++) {
    const element = task_list.children[task_list.children.length - 1];
    task_list.removeChild(element);
  }
});
 //* Day-16
const load = () => {
  //* 1.get data from localstorage
  const ls_data = JSON.parse(localStorage.getItem("tasks_data"));
  console.log(ls_data);
  //*2 check ls_data
  if (ls_data) {
    //* 3get each item from data array
    ls_data.forEach((task) => {
      tasks.push(task);
      console.log(task);

      //*4. create li element
      const li = document.createElement("li");
      li.innerHTML = `<p>${task.text}</p>`; //*5.insert p element to li
      if (task.completed) {
        li.style.textDecoration = "line-through";
        li.style.opacity = 0.5;
      }
      li.addEventListener("click", function () {
        console.log(this);
        this.style.textDecoration = "line-through";
        this.style.opacity = 0.5;
        console.log("clicked li", task);
        console.log({ beforechange: tasks });
        tasks.forEach((t) => {
          if (task.id === t.id) {
            t.completed = !t.completed;
          }
        });
        console.log({ afterchange: tasks });
        localStorage.setItem("tasks_data", JSON.stringify(tasks));
      });
      //*6.li append to ul
      task_list.appendChild(li);
      //* 7. focus to input textbox
      inp_task.focus();
    });
  }
};
 //*End Day-16

load();
