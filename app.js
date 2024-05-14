//access the elements.

let taskInputEle = document.getElementById("task-input");
let taskListElement = document.getElementById("task-list");
let buttonElement = document.getElementById("add-button");


function Addtask() {
  //check the input is it empty or not
  if (taskInputEle.value == "") {
    alert("Enter Task");
  } else {
    let taskEle = document.createElement("li");
    //add class prop
    taskEle.classList.add("my-task");

    let exp = `${taskInputEle.value.trim()}   <span id="delete">Delete</span>   <span id="update">Update</span>  `;
    taskEle.innerHTML = exp;
    taskListElement.appendChild(taskEle);
    //clear the input area after task added
    taskInputEle.value = "";

    //Delete task
    taskEle.querySelector("span").addEventListener("click", () => {
      taskEle.remove();
    });
  }
}

//apply click event to the Add button element
buttonElement.addEventListener(
  "click",

  Addtask
);
