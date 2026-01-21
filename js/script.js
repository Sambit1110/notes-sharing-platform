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
