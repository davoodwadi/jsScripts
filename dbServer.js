const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test.db");

// SQL statement to create the battles table
const createTableSQL = `
   CREATE TABLE IF NOT EXISTS battles (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       duration REAL,
       result TEXT,
       myRating INTEGER,
       theirRating INTEGER,
       myRatingChange INTEGER,
       theirName TEXT,
       date TEXT
   )`;

// Execute the SQL statement to create the table
db.run(createTableSQL, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Battles table created or already exists.");
});

// Create an Express application
const app = express();
const PORT = 3000; // Port number

// Middleware
app.use(cors());
app.use(bodyParser.json()); // For parsing application/json

// POST route to insert data
app.post("/add-battle", (req, res) => {
  //   console.log(req.body);
  const battleData = req.body; // Assuming incoming data is in JSON format

  const insertDataSQL = `
INSERT INTO battles (duration, result, myRating, theirRating, myRatingChange, theirName, date)
VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const params = [
    battleData.duration,
    battleData.result,
    battleData.myRating,
    battleData.theirRating,
    battleData.myRatingChange,
    battleData.theirName,
    battleData.date,
  ];

  db.run(insertDataSQL, params, function (err) {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res
        .status(201)
        .send({
          message: "Battle record created",
          id: this.lastID,
          data: battleData,
        });
    }
  });
  // Prepare the INSERT statement
  //   let stmt = db.prepare("INSERT INTO battles (name, idx) VALUES (?, ?)");

  // Run the prepared statement with data from the POST request
  //   stmt.run(name, idx, function (err) {
  //     if (err) {
  //       return res.status(500).json({ error: "Failed to insert data" });
  //     }

  // Send success response with the newly inserted row's ID
  // res.json({ message: "Data inserted", id: this.lastID });
  //   });

  //   stmt.finalize();
});

// Route to retrieve all entries
app.get("/battles", (req, res) => {
  db.all("SELECT * FROM battles", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows.at(-1));
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Close the database connection when the process is terminated
process.on("SIGINT", () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Closed the database connection.");
    process.exit(0);
  });
});
