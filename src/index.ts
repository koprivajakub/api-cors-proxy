import express from "express";
import { handleRequest } from "server/handleRequest";

const app = express();
const port = process.env.PORT || 3001;

app.all("*", handleRequest);

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
