const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/", require("./routes"));

app.listen(3000, () => {
  console.log(`Test server running on port: ${PORT}`);
});
