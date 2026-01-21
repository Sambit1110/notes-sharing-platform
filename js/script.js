function addNote() {
  let subject = document.getElementById("subject").value;
  let title = document.getElementById("title").value;

  if (subject === "" || title === "") {
    alert("Please fill all fields");
    return;
  }

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.push({ subject, title });

  localStorage.setItem("notes", JSON.stringify(notes));

  alert("Note added successfully!");

  document.getElementById("subject").value = "";
  document.getElementById("title").value = "";
}
function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  location.reload(); // refresh page to update list
}
function toggleTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Load theme on page refresh
window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};
