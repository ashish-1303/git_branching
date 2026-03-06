const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let notes = [];

// Route to fetch the notes 
app.get("/notes", (req, res) => 
{
    res.json(notes);
});

// Route to add new notes
app.post("/notes", (req, res) => {
  const note = {
    id: Date.now(),
    text: req.body.text
  };

  notes.push(note);
  res.json(note);
});

app.listen(5000, () => 
{
    console.log("Server running on port : 5000");
});