const express = require("express");
const path = require('path');
const app = express();

// CONSTANTS
const PORT = 9000;


// --- STUFF THAT SHOULD BE IN A STATIC WEBSERVER ---

// TODO: change to using absolute path with _dirname
app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'static/html/index.html')));
app.use("/a", express.static('static'));

// --- END OF STUFF THAT SHOULD BE IN A STATIC WEBSERVER ---

// DEFINE EVENTS API

// TODO: Add mutable, persistent state

// EVENTS STATE
let events = {
  "evs": [
    {
      "name": "Jade's Birthday",
      "date": new Date('November 14, 2020')
    },
    {
      "name": "Wine and Cheese",
      "date": new Date('November 20, 2020 14:00:00')
    }
  ]
};

// Event get endpoint
app.get("/api/events", (req, res) => {
  res.send(JSON.stringify(events));
});

// RUN THE WEBSERVER
console.log("STARTING on port " + PORT + "...");
app.listen(PORT);