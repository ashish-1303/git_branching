//  API URL to fetch and store notes data
const API = "http://localhost:5000/notes";

// Function to show notes
async function loadNotes() {

  let response = await fetch(API);
  let data = await response.json();

  let list = document.getElementById("notesList");
  list.innerHTML = "";

  for (let note of data) {
    let li = document.createElement("li");
    li.innerText = note.text;
    list.appendChild(li);
  }
}

// Function to add a new note
async function addNote() {

  let input = document.getElementById("noteInput");
  let text = input.value;

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: text })
  });

  input.value = "";
  loadNotes();
}

//  Notes will be loaded when page opens
loadNotes();