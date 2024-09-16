const express = require("express");
const db = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server Listening at  http://localhost:${PORT}`);
  });
});
