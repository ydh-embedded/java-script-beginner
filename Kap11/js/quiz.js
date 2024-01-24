document.addEventListener("DOMContentLoaded", _ => {
  const dropzones = document.querySelectorAll("#dropzones > div");
  const dz1 = document.querySelector("#dz1");
  const dz2 = document.querySelector("#dz2");
  const dz3 = document.querySelector("#dz3");

  const tasks = document.querySelectorAll("#tasks > div");
  const di1 = document.querySelector("#task1");
  const di2 = document.querySelector("#task2");
  const di3 = document.querySelector("#task3");

  const output = document.querySelector("#ausgabe");

  let points = 0;
  let attempts = 0;

  for (let i = 0; i < dropzones.length; i++) {
    dropzones[i].ondragover = (evt) => {
      evt.preventDefault();
      evt.currentTarget.classList.add("dragover");
    }
    dropzones[i].ondragleave = (evt) => {
      evt.preventDefault();
      evt.currentTarget.classList.remove("dragover");
    }
    dropzones[i].ondrop = (evt) => {
      evt.preventDefault();
      const task = evt.dataTransfer.getData("id"); // task-id
      const selfId = evt.target.id;

      attempts++;

      // task ablegen
      evt.target.appendChild(document.getElementById(task));

      // Prüfung
      if (task === "task1" && selfId === "dz3") {
        points += 1;
      }
      if (task === "task2" && selfId === "dz2") {
        points += 1;
      }
      if (task === "task3" && selfId === "dz1") {
        points += 1;
      }

      if (attempts === 3) {
        if (points === 3) {
          ausgabe.innerHTML = "Alles richtig!"
        } else {
          ausgabe.innerHTML = "Leider falsch.";
        }
      }
    }
  }

  for (let i = 0; i < tasks.length; i++) {
    tasks[i].ondragstart = (evt) => {
      evt.dataTransfer.setData("id", evt.target.id);
    }
  }
});