const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;

const courses = require("./data/Course.json");

app.listen(port, () => {
  console.log("Server running on", port);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course.id == id);
  res.send(selectedCourse);
});
app.get("/courses", (req, res) => {
  res.send(courses);
});
