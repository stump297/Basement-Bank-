const express = require("express");
const db = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;
const basementsRouter = require("./routes/basements");

app.use(express.json());
app.use("/api/basements", basementsRouter);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server Listening at  http://localhost:${PORT}`);
  });
});
