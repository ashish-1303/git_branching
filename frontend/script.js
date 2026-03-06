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

//  Notes will be loaded when page opens
loadNotes();