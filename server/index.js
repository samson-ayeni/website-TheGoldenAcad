const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database-connection");

//Middlware
app.use(cors());
app.use(express.json());

//Routes

//get all file links

app.get("/thegoldenacademy/materials", async(req, res) => {
  try {
    const allContent = await pool.query("SELECT * FROM content");

    res.json(allContent.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get all videos links

app.get("/thegoldenacademy/videos", async(req, res) => {
  try {
    const allVideos = await pool.query("SELECT * FROM videos");

    res.json(allVideos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(4000, () => {
  console.log("server has started on port 4000");
});