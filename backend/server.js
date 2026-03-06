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

// Route to delete the notes
app.delete("/notes/:id", (req, res) => {

  const id = parseInt(req.params.id);

  notes = notes.filter(note => note.id !== id);

  res.json({ message: "Notes Deleted Successfully!" });

});

app.listen(5000, () => 
{
    console.log("Server running on port : 5000");
});