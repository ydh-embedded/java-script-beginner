document.addEventListener("DOMContentLoaded", () => {


  const edit      = document.querySelector("#edit");
  const clear     = document.querySelector("#clear");
  const todoList  = document.querySelector("#todoList");

  function restoreContents() {
    const myTodoList = localStorage["todoList"];
    if( myTodoList !== undefined ) {
      todoList.innerHTML = myTodoList;
    }
  }

  function saveContents() {
    localStorage["todoList"] = todoList.innerHTML;
  }

  function toggleEditContent() {
    if(todoList.getAttribute("contenteditable") === "false") {
      todoList.setAttribute("contenteditable", "true");
      edit.innerHTML = "Speichern";
      todoList.focus();
    } else {
      todoList.setAttribute("contenteditable", "false");
      edit.innerHTML = "Bearbeiten";
      saveContents();
    }
  }

  function resetContent() {
    localStorage.clear();
    window.location.reload();
  }

  restoreContents();

  edit.addEventListener("click", toggleEditContent);
  clear.addEventListener("click", resetContent);
});